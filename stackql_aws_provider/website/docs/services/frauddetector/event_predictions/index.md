--- 
title: event_predictions
hide_title: false
hide_table_of_contents: false
keywords:
  - event_predictions
  - frauddetector
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>event_predictions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_predictions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.event_predictions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_prediction"
    values={[
        { label: 'get_event_prediction', value: 'get_event_prediction' },
        { label: 'list_event_predictions', value: 'list_event_predictions' }
    ]}
>
<TabItem value="get_event_prediction">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="external_model_outputs" /></td>
    <td><code>array</code></td>
    <td>The model scores for Amazon SageMaker models.</td>
</tr>
<tr>
    <td><CopyableCode code="model_scores" /></td>
    <td><code>array</code></td>
    <td>The model scores. Amazon Fraud Detector generates model scores between 0 and 1000, where 0 is low fraud risk and 1000 is high fraud risk. Model scores are directly related to the false positive rate (FPR). For example, a score of 600 corresponds to an estimated 10% false positive rate whereas a score of 900 corresponds to an estimated 2% false positive rate.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_results" /></td>
    <td><code>array</code></td>
    <td>The results from the rules.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_event_predictions">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="event_prediction_summaries" /></td>
    <td><code>array</code></td>
    <td>The summary of the past predictions.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Identifies the next page of results to return. Use the token to make the call again to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_event_prediction"><CopyableCode code="get_event_prediction" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Evaluates an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used.</td>
</tr>
<tr>
    <td><a href="#list_event_predictions"><CopyableCode code="list_event_predictions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of past predictions. The list can be filtered by detector ID, detector version ID, event ID, event type, or by specifying a time period. If filter is not specified, the most recent prediction is returned. For example, the following filter lists all past predictions for xyz event type - &#123; "eventType":&#123; "value": "xyz" &#125;” &#125; This is a paginated API. If you provide a null maxResults, this action will retrieve a maximum of 10 records per page. If you provide a maxResults, the value must be between 50 and 100. To get the next page results, provide the nextToken from the response as part of your request. A null nextToken fetches the records from the beginning.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_event_prediction"
    values={[
        { label: 'get_event_prediction', value: 'get_event_prediction' },
        { label: 'list_event_predictions', value: 'list_event_predictions' }
    ]}
>
<TabItem value="get_event_prediction">

Evaluates an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used.

```sql
SELECT
external_model_outputs,
model_scores,
rule_results
FROM aws.frauddetector.event_predictions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_event_predictions">

Gets a list of past predictions. The list can be filtered by detector ID, detector version ID, event ID, event type, or by specifying a time period. If filter is not specified, the most recent prediction is returned. For example, the following filter lists all past predictions for xyz event type - &#123; "eventType":&#123; "value": "xyz" &#125;” &#125; This is a paginated API. If you provide a null maxResults, this action will retrieve a maximum of 10 records per page. If you provide a maxResults, the value must be between 50 and 100. To get the next page results, provide the nextToken from the response as part of your request. A null nextToken fetches the records from the beginning.

```sql
SELECT
event_prediction_summaries,
next_token
FROM aws.frauddetector.event_predictions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
