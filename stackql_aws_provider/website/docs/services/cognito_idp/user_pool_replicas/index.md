--- 
title: user_pool_replicas
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_replicas
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>user_pool_replicas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_pool_replicas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.user_pool_replicas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_user_pool_replicas"
    values={[
        { label: 'list_user_pool_replicas', value: 'list_user_pool_replicas' }
    ]}
>
<TabItem value="list_user_pool_replicas">

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
    <td>A pagination token for retrieving the next page of results. If this value is null, there are no more results to retrieve. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_replicas" /></td>
    <td><code>array</code></td>
    <td>A list of user pool replicas, including information about their status, role, and Region.</td>
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
    <td><a href="#list_user_pool_replicas"><CopyableCode code="list_user_pool_replicas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all replicas for a user pool, including both primary and secondary replicas. We recommend using pagination to ensure that the operation returns quickly and successfully. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#create_user_pool_replica"><CopyableCode code="create_user_pool_replica" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-RegionName"><code>RegionName</code></a></td>
    <td></td>
    <td>Creates a replica of an existing user pool in a specified Amazon Web Services Region. The replica enables multi-region replication for high availability and disaster recovery. To create a replica, you must have permissions to create user pools in the target Region. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#update_user_pool_replica"><CopyableCode code="update_user_pool_replica" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-RegionName"><code>RegionName</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td></td>
    <td>Updates replica-specific settings for a user pool replica. You can modify the status to activate or deactivate the replica. This request can be made in both primary and secondary regions of the user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#delete_user_pool_replica"><CopyableCode code="delete_user_pool_replica" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a secondary replica user pool. You can only delete replicas that are in the INACTIVE status. This operation must be called from the primary Region. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="list_user_pool_replicas"
    values={[
        { label: 'list_user_pool_replicas', value: 'list_user_pool_replicas' }
    ]}
>
<TabItem value="list_user_pool_replicas">

Lists all replicas for a user pool, including both primary and secondary replicas. We recommend using pagination to ensure that the operation returns quickly and successfully. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
next_token,
user_pool_replicas
FROM aws.cognito_idp.user_pool_replicas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_pool_replica"
    values={[
        { label: 'create_user_pool_replica', value: 'create_user_pool_replica' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_pool_replica">

Creates a replica of an existing user pool in a specified Amazon Web Services Region. The replica enables multi-region replication for high availability and disaster recovery. To create a replica, you must have permissions to create user pools in the target Region. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
INSERT INTO aws.cognito_idp.user_pool_replicas (
UserPoolId,
RegionName,
UserPoolTags,
region
)
SELECT 
'{{ UserPoolId }}' /* required */,
'{{ RegionName }}' /* required */,
'{{ UserPoolTags }}',
'{{ region }}'
RETURNING
user_pool_replica
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_pool_replicas
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_pool_replicas resource.
    - name: UserPoolId
      value: "{{ UserPoolId }}"
      description: |
        The ID of the user pool to replicate.
    - name: RegionName
      value: "{{ RegionName }}"
      description: |
        The Amazon Web Services Region where you want to create the replica user pool.
    - name: UserPoolTags
      value: "{{ UserPoolTags }}"
      description: |
        A map of tags to assign to the replica user pool. Each tag consists of a key and an optional value, both of which you define. You can maintain tags independently on replica user pools.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_pool_replica"
    values={[
        { label: 'update_user_pool_replica', value: 'update_user_pool_replica' }
    ]}
>
<TabItem value="update_user_pool_replica">

Updates replica-specific settings for a user pool replica. You can modify the status to activate or deactivate the replica. This request can be made in both primary and secondary regions of the user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.user_pool_replicas
SET 
UserPoolId = '{{ UserPoolId }}',
RegionName = '{{ RegionName }}',
Status = '{{ Status }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
AND RegionName = '{{ RegionName }}' --required
AND Status = '{{ Status }}' --required
RETURNING
user_pool_replica;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_pool_replica"
    values={[
        { label: 'delete_user_pool_replica', value: 'delete_user_pool_replica' }
    ]}
>
<TabItem value="delete_user_pool_replica">

Deletes a secondary replica user pool. You can only delete replicas that are in the INACTIVE status. This operation must be called from the primary Region. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
DELETE FROM aws.cognito_idp.user_pool_replicas
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
