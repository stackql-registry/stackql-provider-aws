--- 
title: campaign_activities
hide_title: false
hide_table_of_contents: false
keywords:
  - campaign_activities
  - pinpoint
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

Creates, updates, deletes, gets or lists a <code>campaign_activities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="campaign_activities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.campaign_activities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_campaign_activities"
    values={[
        { label: 'get_campaign_activities', value: 'get_campaign_activities' }
    ]}
>
<TabItem value="get_campaign_activities">

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
    <td><CopyableCode code="Item" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each activity that was performed by the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</td>
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
    <td><a href="#get_campaign_activities"><CopyableCode code="get_campaign_activities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-campaign-id"><code>campaign-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page-size"><code>page-size</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Retrieves information about all the activities for a campaign.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-campaign-id">
    <td><CopyableCode code="campaign-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the campaign.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-page-size">
    <td><CopyableCode code="page-size" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The NextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_campaign_activities"
    values={[
        { label: 'get_campaign_activities', value: 'get_campaign_activities' }
    ]}
>
<TabItem value="get_campaign_activities">

Retrieves information about all the activities for a campaign.

```sql
SELECT
Item,
NextToken
FROM aws.pinpoint.campaign_activities
WHERE `application-id` = '{{ application-id }}' -- required
AND `campaign-id` = '{{ campaign-id }}' -- required
AND region = '{{ region }}' -- required
AND `page-size` = '{{ page-size }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>
