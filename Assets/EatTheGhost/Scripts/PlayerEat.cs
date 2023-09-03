using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerEat : MonoBehaviour
{

    public Text score;
    private int _score = 0;

    private void Start()
    {
        score.text = "0";
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("ghost"))
        {
            _score += 5;
            score.text = _score.ToString();
        }
    }

}
