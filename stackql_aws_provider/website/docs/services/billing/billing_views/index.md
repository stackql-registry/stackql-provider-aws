--- 
title: billing_views
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_views
  - billing
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

Creates, updates, deletes, gets or lists a <code>billing_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billing.billing_views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_billing_view"
    values={[
        { label: 'get_billing_view', value: 'get_billing_view' },
        { label: 'list_billing_views', value: 'list_billing_views' }
    ]}
>
<TabItem value="get_billing_view">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The account name of the billing view. (pattern: &lt;code&gt;&#91; a-zA-Z0-9_\+=\.\-@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:(billing)::&#91;0-9&#93;&#123;12&#125;:billingview/&#91;a-zA-Z0-9/:_\+=\.\-@&#93;&#123;0,75&#125;&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billingViewType" /></td>
    <td><code>string</code></td>
    <td>The type of billing group. (PRIMARY, BILLING_GROUP, CUSTOM, BILLING_TRANSFER, BILLING_TRANSFER_SHOWBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the billing view was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataFilterExpression" /></td>
    <td><code>object</code></td>
    <td>See Expression. Billing view only supports LINKED_ACCOUNT, Tags, and CostCategories.</td>
</tr>
<tr>
    <td><CopyableCode code="derivedViewCount" /></td>
    <td><code>integer</code></td>
    <td>The number of billing views that use this billing view as a source.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the billing view. (pattern: &lt;code&gt;(&#91; a-zA-Z0-9_\+=\.\-@&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="healthStatus" /></td>
    <td><code>object</code></td>
    <td>The current health status of the billing view.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerAccountId" /></td>
    <td><code>string</code></td>
    <td>The account owner of the billing view. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the source billing view, if this is a derived billing view. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceViewCount" /></td>
    <td><code>integer</code></td>
    <td>The number of source views associated with this billing view.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the billing view was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="viewDefinitionLastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the billing view definition was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_billing_views">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A list of names of the Billing view. (pattern: &lt;code&gt;&#91; a-zA-Z0-9_\+=\.\-@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. (pattern: &lt;code&gt;arn:aws&#91;a-z-&#93;*:(billing)::&#91;0-9&#93;&#123;12&#125;:billingview/&#91;a-zA-Z0-9/:_\+=\.\-@&#93;&#123;0,75&#125;&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billingViewType" /></td>
    <td><code>string</code></td>
    <td>The type of billing view. (PRIMARY, BILLING_GROUP, CUSTOM, BILLING_TRANSFER, BILLING_TRANSFER_SHOWBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the billing view. (pattern: &lt;code&gt;(&#91; a-zA-Z0-9_\+=\.\-@&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="healthStatus" /></td>
    <td><code>object</code></td>
    <td>The current health status of the billing view.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerAccountId" /></td>
    <td><code>string</code></td>
    <td>The list of owners of the Billing view. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the source billing view, if this is a derived billing view. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_billing_view"><CopyableCode code="get_billing_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the metadata associated to the specified billing view ARN.</td>
</tr>
<tr>
    <td><a href="#list_billing_views"><CopyableCode code="list_billing_views" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the billing views available for a given time period. Every Amazon Web Services account has a unique PRIMARY billing view that represents the billing data available by default. Accounts that use Billing Conductor also have BILLING_GROUP billing views representing pro forma costs associated with each created billing group.</td>
</tr>
<tr>
    <td><a href="#create_billing_view"><CopyableCode code="create_billing_view" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sourceViews"><code>sourceViews</code></a></td>
    <td></td>
    <td>Creates a billing view with the specified billing view attributes.</td>
</tr>
<tr>
    <td><a href="#update_billing_view"><CopyableCode code="update_billing_view" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>An API to update the attributes of the billing view.</td>
</tr>
<tr>
    <td><a href="#delete_billing_view"><CopyableCode code="delete_billing_view" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified billing view.</td>
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
    defaultValue="get_billing_view"
    values={[
        { label: 'get_billing_view', value: 'get_billing_view' },
        { label: 'list_billing_views', value: 'list_billing_views' }
    ]}
>
<TabItem value="get_billing_view">

Returns the metadata associated to the specified billing view ARN.

```sql
SELECT
name,
arn,
billingViewType,
createdAt,
dataFilterExpression,
derivedViewCount,
description,
healthStatus,
ownerAccountId,
sourceAccountId,
sourceViewCount,
updatedAt,
viewDefinitionLastUpdatedAt
FROM aws.billing.billing_views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_billing_views">

Lists the billing views available for a given time period. Every Amazon Web Services account has a unique PRIMARY billing view that represents the billing data available by default. Accounts that use Billing Conductor also have BILLING_GROUP billing views representing pro forma costs associated with each created billing group.

```sql
SELECT
name,
arn,
billingViewType,
description,
healthStatus,
ownerAccountId,
sourceAccountId
FROM aws.billing.billing_views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_billing_view"
    values={[
        { label: 'create_billing_view', value: 'create_billing_view' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_billing_view">

Creates a billing view with the specified billing view attributes.

```sql
INSERT INTO aws.billing.billing_views (
name,
description,
sourceViews,
dataFilterExpression,
clientToken,
resourceTags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ sourceViews }}' /* required */,
'{{ dataFilterExpression }}',
'{{ clientToken }}',
'{{ resourceTags }}',
'{{ region }}'
RETURNING
arn,
createdAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: billing_views
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the billing_views resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the billing view.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the billing view.
    - name: sourceViews
      value:
        - "{{ sourceViews }}"
      description: |
        A list of billing views used as the data source for the custom billing view.
    - name: dataFilterExpression
      description: |
        See Expression. Billing view only supports LINKED_ACCOUNT, Tags, and CostCategories.
      value:
        dimensions:
          key: "{{ key }}"
          values:
            - "{{ values }}"
        tags:
          key: "{{ key }}"
          values:
            - "{{ values }}"
        costCategories:
          key: "{{ key }}"
          values:
            - "{{ values }}"
        timeRange:
          beginDateInclusive: "{{ beginDateInclusive }}"
          endDateInclusive: "{{ endDateInclusive }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. If the original request completes successfully, any subsequent retries complete successfully without performing any further actions with an idempotent request.
    - name: resourceTags
      description: |
        A list of key value map specifying tags associated to the billing view being created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_billing_view"
    values={[
        { label: 'update_billing_view', value: 'update_billing_view' }
    ]}
>
<TabItem value="update_billing_view">

An API to update the attributes of the billing view.

```sql
UPDATE aws.billing.billing_views
SET 
arn = '{{ arn }}',
name = '{{ name }}',
description = '{{ description }}',
dataFilterExpression = '{{ dataFilterExpression }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
arn,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_billing_view"
    values={[
        { label: 'delete_billing_view', value: 'delete_billing_view' }
    ]}
>
<TabItem value="delete_billing_view">

Deletes the specified billing view.

```sql
DELETE FROM aws.billing.billing_views
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
