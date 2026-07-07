--- 
title: campaign_state_batches
hide_title: false
hide_table_of_contents: false
keywords:
  - campaign_state_batches
  - connectcampaigns
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

Creates, updates, deletes, gets or lists a <code>campaign_state_batches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="campaign_state_batches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcampaigns.campaign_state_batches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_campaign_state_batch"
    values={[
        { label: 'get_campaign_state_batch', value: 'get_campaign_state_batch' }
    ]}
>
<TabItem value="get_campaign_state_batch">

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
    <td><CopyableCode code="failedRequests" /></td>
    <td><code>array</code></td>
    <td>List of failed requests of campaign state</td>
</tr>
<tr>
    <td><CopyableCode code="successfulRequests" /></td>
    <td><code>array</code></td>
    <td>List of successful response of campaign state</td>
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
    <td><a href="#get_campaign_state_batch"><CopyableCode code="get_campaign_state_batch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get state of campaigns for the specified Amazon Connect account.</td>
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
    defaultValue="get_campaign_state_batch"
    values={[
        { label: 'get_campaign_state_batch', value: 'get_campaign_state_batch' }
    ]}
>
<TabItem value="get_campaign_state_batch">

Get state of campaigns for the specified Amazon Connect account.

```sql
SELECT
failedRequests,
successfulRequests
FROM aws.connectcampaigns.campaign_state_batches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
