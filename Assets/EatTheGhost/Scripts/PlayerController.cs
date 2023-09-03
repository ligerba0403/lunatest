using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{

    bool isRight = true;
    private Camera mainCamera;
    private Vector2 screenSize;


    private void Start()
    {
        mainCamera = Camera.main;
        screenSize = new Vector2(Screen.width, Screen.height);
    }

    private void Update()
    {
        if (isRight)
        {
            transform.Translate(new Vector3(1f, 0f, 0f) * Time.deltaTime);
        }
        else
            transform.Translate(new Vector3(-1f, 0f, 0f) * Time.deltaTime);

        checkPos();
    }

    private void checkPos()
    {
        Vector3 screenPos = mainCamera.WorldToScreenPoint(transform.position);
        if ()
        {
            isRight = !isRight;
        }
    }

    private void OnMouseDown()
    {
        isRight = !isRight;
    }
}
