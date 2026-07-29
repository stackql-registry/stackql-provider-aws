--- 
title: identity_propagation_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_propagation_configs
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

Creates, updates, deletes, gets or lists an <code>identity_propagation_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_propagation_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.identity_propagation_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_identity_propagation_configs"
    values={[
        { label: 'list_identity_propagation_configs', value: 'list_identity_propagation_configs' }
    ]}
>
<TabItem value="list_identity_propagation_configs">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>A list of services and their authorized targets that the Quick Sight IAM Identity Center application can access.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#list_identity_propagation_configs"><CopyableCode code="list_identity_propagation_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all services and authorized targets that the Quick Sight IAM Identity Center application can access. This operation is only supported for Quick Sight accounts that use IAM Identity Center.</td>
</tr>
<tr>
    <td><a href="#update_identity_propagation_config"><CopyableCode code="update_identity_propagation_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds or updates services and authorized targets to configure what the Quick Sight IAM Identity Center application can access. This operation is only supported for Quick Sight accounts using IAM Identity Center</td>
</tr>
<tr>
    <td><a href="#delete_identity_propagation_config"><CopyableCode code="delete_identity_propagation_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all access scopes and authorized targets that are associated with a service from the Quick Sight IAM Identity Center application. This operation is only supported for Quick Sight accounts that use IAM Identity Center.</td>
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
    <td>The ID of the Amazon Web Services account that you want to delete an identity propagation configuration from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services service that you want to delete the associated access scopes and authorized targets from.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_identity_propagation_configs"
    values={[
        { label: 'list_identity_propagation_configs', value: 'list_identity_propagation_configs' }
    ]}
>
<TabItem value="list_identity_propagation_configs">

Lists all services and authorized targets that the Quick Sight IAM Identity Center application can access. This operation is only supported for Quick Sight accounts that use IAM Identity Center.

```sql
SELECT
next_token,
request_id,
services,
status
FROM aws.quicksight.identity_propagation_configs
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_identity_propagation_config"
    values={[
        { label: 'update_identity_propagation_config', value: 'update_identity_propagation_config' }
    ]}
>
<TabItem value="update_identity_propagation_config">

Adds or updates services and authorized targets to configure what the Quick Sight IAM Identity Center application can access. This operation is only supported for Quick Sight accounts using IAM Identity Center

```sql
UPDATE aws.quicksight.identity_propagation_configs
SET 
AuthorizedTargets = '{{ AuthorizedTargets }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND service = '{{ service }}' --required
AND region = '{{ region }}' --required
RETURNING
request_id,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_identity_propagation_config"
    values={[
        { label: 'delete_identity_propagation_config', value: 'delete_identity_propagation_config' }
    ]}
>
<TabItem value="delete_identity_propagation_config">

Deletes all access scopes and authorized targets that are associated with a service from the Quick Sight IAM Identity Center application. This operation is only supported for Quick Sight accounts that use IAM Identity Center.

```sql
DELETE FROM aws.quicksight.identity_propagation_configs
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND service = '{{ service }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
