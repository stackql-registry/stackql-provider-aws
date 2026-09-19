--- 
title: qa_results
hide_title: false
hide_table_of_contents: false
keywords:
  - qa_results
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>qa_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="qa_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.qa_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#predict_qa_results"><CopyableCode code="predict_qa_results" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueryText"><code>QueryText</code></a></td>
    <td></td>
    <td>Predicts existing visuals or generates new visuals to answer a given query. This API uses trusted identity propagation to ensure that an end user is authenticated and receives the embed URL that is specific to that user. The IAM Identity Center application that the user has logged into needs to have trusted Identity Propagation enabled for Quick with the scope value set to quicksight:read. Before you use this action, make sure that you have configured the relevant Quick resource and permissions. We recommend enabling the QSearchStatus API to unlock the full potential of PredictQnA. When QSearchStatus is enabled, it first checks the specified dashboard for any existing visuals that match the question. If no matching visuals are found, PredictQnA uses generative Q&A to provide an answer. To update the QSearchStatus, see UpdateQuickSightQSearchConfiguration.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that the user wants to execute Predict QA results in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="predict_qa_results"
    values={[
        { label: 'predict_qa_results', value: 'predict_qa_results' }
    ]}
>
<TabItem value="predict_qa_results">

Predicts existing visuals or generates new visuals to answer a given query. This API uses trusted identity propagation to ensure that an end user is authenticated and receives the embed URL that is specific to that user. The IAM Identity Center application that the user has logged into needs to have trusted Identity Propagation enabled for Quick with the scope value set to quicksight:read. Before you use this action, make sure that you have configured the relevant Quick resource and permissions. We recommend enabling the QSearchStatus API to unlock the full potential of PredictQnA. When QSearchStatus is enabled, it first checks the specified dashboard for any existing visuals that match the question. If no matching visuals are found, PredictQnA uses generative Q&A to provide an answer. To update the QSearchStatus, see UpdateQuickSightQSearchConfiguration.

```sql
EXEC aws.quicksight.qa_results.predict_qa_results 
@aws_account_id='{{ aws_account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"QueryText": "{{ QueryText }}", 
"IncludeQuickSightQIndex": "{{ IncludeQuickSightQIndex }}", 
"IncludeGeneratedAnswer": "{{ IncludeGeneratedAnswer }}", 
"MaxTopicsToConsider": {{ MaxTopicsToConsider }}
}'
;
```
</TabItem>
</Tabs>
