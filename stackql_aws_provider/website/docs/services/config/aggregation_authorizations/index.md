--- 
title: aggregation_authorizations
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregation_authorizations
  - config
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

Creates, updates, deletes, gets or lists an <code>aggregation_authorizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aggregation_authorizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.aggregation_authorizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_aggregation_authorizations"
    values={[
        { label: 'describe_aggregation_authorizations', value: 'describe_aggregation_authorizations' }
    ]}
>
<TabItem value="describe_aggregation_authorizations">

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
    <td><CopyableCode code="aggregation_authorization_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the aggregation object.</td>
</tr>
<tr>
    <td><CopyableCode code="authorized_account_id" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account ID of the account authorized to aggregate data. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorized_aws_region" /></td>
    <td><code>string</code></td>
    <td>The region authorized to collect aggregated data.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp when the aggregation authorization was created.</td>
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
    <td><a href="#describe_aggregation_authorizations"><CopyableCode code="describe_aggregation_authorizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of authorizations granted to various aggregator accounts and regions.</td>
</tr>
<tr>
    <td><a href="#put_aggregation_authorization"><CopyableCode code="put_aggregation_authorization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AuthorizedAccountId"><code>AuthorizedAccountId</code></a>, <a href="#parameter-AuthorizedAwsRegion"><code>AuthorizedAwsRegion</code></a></td>
    <td></td>
    <td>Authorizes the aggregator account and region to collect data from the source account and region. Tags are added at creation and cannot be updated with this operation PutAggregationAuthorization is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different. Use TagResource and UntagResource to update tags after creation.</td>
</tr>
<tr>
    <td><a href="#delete_aggregation_authorization"><CopyableCode code="delete_aggregation_authorization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the authorization granted to the specified configuration aggregator account in a specified region.</td>
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
    defaultValue="describe_aggregation_authorizations"
    values={[
        { label: 'describe_aggregation_authorizations', value: 'describe_aggregation_authorizations' }
    ]}
>
<TabItem value="describe_aggregation_authorizations">

Returns a list of authorizations granted to various aggregator accounts and regions.

```sql
SELECT
aggregation_authorization_arn,
authorized_account_id,
authorized_aws_region,
creation_time
FROM aws.config.aggregation_authorizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_aggregation_authorization"
    values={[
        { label: 'put_aggregation_authorization', value: 'put_aggregation_authorization' }
    ]}
>
<TabItem value="put_aggregation_authorization">

Authorizes the aggregator account and region to collect data from the source account and region. Tags are added at creation and cannot be updated with this operation PutAggregationAuthorization is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different. Use TagResource and UntagResource to update tags after creation.

```sql
REPLACE aws.config.aggregation_authorizations
SET 
AuthorizedAccountId = '{{ AuthorizedAccountId }}',
AuthorizedAwsRegion = '{{ AuthorizedAwsRegion }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND AuthorizedAccountId = '{{ AuthorizedAccountId }}' --required
AND AuthorizedAwsRegion = '{{ AuthorizedAwsRegion }}' --required
RETURNING
aggregation_authorization;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_aggregation_authorization"
    values={[
        { label: 'delete_aggregation_authorization', value: 'delete_aggregation_authorization' }
    ]}
>
<TabItem value="delete_aggregation_authorization">

Deletes the authorization granted to the specified configuration aggregator account in a specified region.

```sql
DELETE FROM aws.config.aggregation_authorizations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
