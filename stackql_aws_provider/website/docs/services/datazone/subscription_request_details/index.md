--- 
title: subscription_request_details
hide_title: false
hide_table_of_contents: false
keywords:
  - subscription_request_details
  - datazone
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

Creates, updates, deletes, gets or lists a <code>subscription_request_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscription_request_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.subscription_request_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subscription_request_details"
    values={[
        { label: 'get_subscription_request_details', value: 'get_subscription_request_details' }
    ]}
>
<TabItem value="get_subscription_request_details">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the specified subscription request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="decision_comment" /></td>
    <td><code>string</code></td>
    <td>The decision comment of the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone domain of the subscription request. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="existing_subscription_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the existing subscription. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_forms" /></td>
    <td><code>array</code></td>
    <td>The metadata forms included in the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="request_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="reviewer_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone user who reviewed the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the subscription request. (PENDING, ACCEPTED, REJECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="subscribed_listings" /></td>
    <td><code>array</code></td>
    <td>The subscribed listings in the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="subscribed_principals" /></td>
    <td><code>array</code></td>
    <td>The subscribed principals in the subscription request.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the subscription request was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who updated the subscription request.</td>
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
    <td><a href="#get_subscription_request_details"><CopyableCode code="get_subscription_request_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of the specified subscription request.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which to get the subscription request details.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subscription request the details of which to get.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subscription_request_details"
    values={[
        { label: 'get_subscription_request_details', value: 'get_subscription_request_details' }
    ]}
>
<TabItem value="get_subscription_request_details">

Gets the details of the specified subscription request.

```sql
SELECT
id,
created_at,
created_by,
decision_comment,
domain_id,
existing_subscription_id,
metadata_forms,
request_reason,
reviewer_id,
status,
subscribed_listings,
subscribed_principals,
updated_at,
updated_by
FROM aws.datazone.subscription_request_details
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
