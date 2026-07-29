--- 
title: subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - subscriptions
  - connecthealth
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

Creates, updates, deletes, gets or lists a <code>subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connecthealth.subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subscription"
    values={[
        { label: 'get_subscription', value: 'get_subscription' },
        { label: 'list_subscriptions', value: 'list_subscriptions' }
    ]}
>
<TabItem value="get_subscription">

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
    <td><CopyableCode code="activated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;arn:aws:health-agent:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:domain/(hai-|dom-)&#91;a-z0-9&#93;+/subscription/sub-&#91;a-zA-Z0-9&#93;&#123;21&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deactivated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;(hai-|dom-)&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (ACTIVE, INACTIVE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_id" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;sub-&#91;a-zA-Z0-9&#93;&#123;21&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_subscriptions">

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
    <td><CopyableCode code="activated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;arn:aws:health-agent:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:domain/(hai-|dom-)&#91;a-z0-9&#93;+/subscription/sub-&#91;a-zA-Z0-9&#93;&#123;21&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="deactivated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;(hai-|dom-)&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (ACTIVE, INACTIVE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_id" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;sub-&#91;a-zA-Z0-9&#93;&#123;21&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_subscription"><CopyableCode code="get_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-subscription_id"><code>subscription_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a Subscription.</td>
</tr>
<tr>
    <td><a href="#list_subscriptions"><CopyableCode code="list_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all Subscriptions within a Domain.</td>
</tr>
<tr>
    <td><a href="#create_subscription"><CopyableCode code="create_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new Subscription within a Domain for billing and user management.</td>
</tr>
<tr>
    <td><a href="#activate_subscription"><CopyableCode code="activate_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-subscription_id"><code>subscription_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Activates a Subscription to enable billing for a user.</td>
</tr>
<tr>
    <td><a href="#deactivate_subscription"><CopyableCode code="deactivate_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-subscription_id"><code>subscription_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deactivates a Subscription to stop billing for a user.</td>
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
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the parent Domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-subscription_id">
    <td><CopyableCode code="subscription_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Subscription.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token for pagination.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subscription"
    values={[
        { label: 'get_subscription', value: 'get_subscription' },
        { label: 'list_subscriptions', value: 'list_subscriptions' }
    ]}
>
<TabItem value="get_subscription">

Retrieves information about a Subscription.

```sql
SELECT
activated_at,
arn,
created_at,
deactivated_at,
domain_id,
last_updated_at,
status,
subscription_id
FROM aws.connecthealth.subscriptions
WHERE domain_id = '{{ domain_id }}' -- required
AND subscription_id = '{{ subscription_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_subscriptions">

Lists all Subscriptions within a Domain.

```sql
SELECT
activated_at,
arn,
created_at,
deactivated_at,
domain_id,
last_updated_at,
status,
subscription_id
FROM aws.connecthealth.subscriptions
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_subscription"
    values={[
        { label: 'create_subscription', value: 'create_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_subscription">

Creates a new Subscription within a Domain for billing and user management.

```sql
INSERT INTO aws.connecthealth.subscriptions (
domain_id,
region
)
SELECT 
'{{ domain_id }}',
'{{ region }}'
RETURNING
activated_at,
arn,
created_at,
deactivated_at,
domain_id,
last_updated_at,
status,
subscription_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscriptions
  props:
    - name: domain_id
      value: "{{ domain_id }}"
      description: Required parameter for the subscriptions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subscriptions resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_subscription"
    values={[
        { label: 'activate_subscription', value: 'activate_subscription' },
        { label: 'deactivate_subscription', value: 'deactivate_subscription' }
    ]}
>
<TabItem value="activate_subscription">

Activates a Subscription to enable billing for a user.

```sql
EXEC aws.connecthealth.subscriptions.activate_subscription 
@domain_id='{{ domain_id }}' --required, 
@subscription_id='{{ subscription_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="deactivate_subscription">

Deactivates a Subscription to stop billing for a user.

```sql
EXEC aws.connecthealth.subscriptions.deactivate_subscription 
@domain_id='{{ domain_id }}' --required, 
@subscription_id='{{ subscription_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
