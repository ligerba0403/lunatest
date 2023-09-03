using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{

    bool isRight = true;
    private Camera mainCamera;
    private float minX, maxX, minY, maxY;
    int countNum = 0;

    private void Start()
    {
        mainCamera = Camera.main;

        // Kamera sýnýrlarýný hesaplayýn
        minX = mainCamera.ViewportToWorldPoint(new Vector3(0, 0, 0)).x;
        maxX = mainCamera.ViewportToWorldPoint(new Vector3(1, 0, 0)).x;
        minY = mainCamera.ViewportToWorldPoint(new Vector3(0, 0, 0)).y;
        maxY = mainCamera.ViewportToWorldPoint(new Vector3(0, 1, 0)).y;
    }

    private void FixedUpdate()
    {
        Vector3 position = transform.position;
        position.y = 0f;
        position.x = transform.position.x;
        transform.position = position;

        if (isRight)
        {
            transform.Translate(new Vector3(1f * Time.deltaTime, 0f, 0f));
        }
        else
        {
            transform.Translate(new Vector3(-1f * Time.deltaTime, 0f, 0f));
        }  
        
        if (Input.touchCount > 0 ) 
        {
            onTouch();
        }

        checkPos();
    }

    private void checkPos()
    {
        // Nesnenin pozisyonunu alýn
        Vector3 position = transform.position;

        // Nesnenin pozisyonunu sýnýrlar içinde tutun
        position.x = Mathf.Clamp(position.x, minX, maxX);
        position.y = Mathf.Clamp(position.y, minY, maxY);

        if (position.x == minX || position.x == maxX || position.y == minY || position.y == maxY)
        {
            Debug.Log("Nesne kamera sýnýrlarýna deðdi!");
            onTouch();
        }
    }

    private void onTouch()
    {
        
        isRight = !isRight;
    }
}
