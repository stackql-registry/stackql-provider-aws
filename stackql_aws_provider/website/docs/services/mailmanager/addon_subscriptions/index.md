--- 
title: addon_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - addon_subscriptions
  - mailmanager
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

Creates, updates, deletes, gets or lists an <code>addon_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="addon_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.addon_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_addon_subscription"
    values={[
        { label: 'get_addon_subscription', value: 'get_addon_subscription' },
        { label: 'list_addon_subscriptions', value: 'list_addon_subscriptions' }
    ]}
>
<TabItem value="get_addon_subscription">

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
    <td><CopyableCode code="AddonName" /></td>
    <td><code>string</code></td>
    <td>The name of the Add On for the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="AddonSubscriptionArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the Add On subscription was created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_addon_subscriptions">

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
    <td><CopyableCode code="AddonName" /></td>
    <td><code>string</code></td>
    <td>The name of the Add On.</td>
</tr>
<tr>
    <td><CopyableCode code="AddonSubscriptionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Add On subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="AddonSubscriptionId" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Add On subscription. (pattern: &lt;code&gt;as-&#91;a-zA-Z0-9&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the Add On subscription was created.</td>
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
    <td><a href="#get_addon_subscription"><CopyableCode code="get_addon_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets detailed information about an Add On subscription.</td>
</tr>
<tr>
    <td><a href="#list_addon_subscriptions"><CopyableCode code="list_addon_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Add On subscriptions in your account.</td>
</tr>
<tr>
    <td><a href="#create_addon_subscription"><CopyableCode code="create_addon_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AddonName"><code>AddonName</code></a></td>
    <td></td>
    <td>Creates a subscription for an Add On representing the acceptance of its terms of use and additional pricing. The subscription can then be used to create an instance for use in rule sets or traffic policies.</td>
</tr>
<tr>
    <td><a href="#delete_addon_subscription"><CopyableCode code="delete_addon_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Add On subscription.</td>
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
    defaultValue="get_addon_subscription"
    values={[
        { label: 'get_addon_subscription', value: 'get_addon_subscription' },
        { label: 'list_addon_subscriptions', value: 'list_addon_subscriptions' }
    ]}
>
<TabItem value="get_addon_subscription">

Gets detailed information about an Add On subscription.

```sql
SELECT
AddonName,
AddonSubscriptionArn,
CreatedTimestamp
FROM aws.mailmanager.addon_subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_addon_subscriptions">

Lists all Add On subscriptions in your account.

```sql
SELECT
AddonName,
AddonSubscriptionArn,
AddonSubscriptionId,
CreatedTimestamp
FROM aws.mailmanager.addon_subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_addon_subscription"
    values={[
        { label: 'create_addon_subscription', value: 'create_addon_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_addon_subscription">

Creates a subscription for an Add On representing the acceptance of its terms of use and additional pricing. The subscription can then be used to create an instance for use in rule sets or traffic policies.

```sql
INSERT INTO aws.mailmanager.addon_subscriptions (
ClientToken,
AddonName,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ AddonName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
AddonSubscriptionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: addon_subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the addon_subscriptions resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token that Amazon SES uses to recognize subsequent retries of the same request.
    - name: AddonName
      value: "{{ AddonName }}"
      description: |
        The name of the Add On to subscribe to. You can only have one subscription for each Add On name.
    - name: Tags
      description: |
        The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_addon_subscription"
    values={[
        { label: 'delete_addon_subscription', value: 'delete_addon_subscription' }
    ]}
>
<TabItem value="delete_addon_subscription">

Deletes an Add On subscription.

```sql
DELETE FROM aws.mailmanager.addon_subscriptions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
