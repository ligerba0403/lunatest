using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;

public class GhostSpawner : MonoBehaviour
{
    public GameObject ghost;
    public float h;
    private Vector3 spawnPos;

    private void Start()
    {
        StartCoroutine(spawnGhost());
    }
    IEnumerator spawnGhost()
    {
        while (true)
        {
            spawnPos = new Vector3(Random.Range(-2, 3), h, 0f);
            Instantiate(ghost, spawnPos, Quaternion.identity);
            yield return new WaitForSeconds(1f);
        }
    }

}
