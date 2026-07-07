--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - secretsmanager
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

Creates, updates, deletes, gets or lists a <code>resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.secretsmanager.resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_policy"
    values={[
        { label: 'get_resource_policy', value: 'get_resource_policy' }
    ]}
>
<TabItem value="get_resource_policy">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of the secret that the resource-based policy was retrieved for.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the secret that the resource-based policy was retrieved for.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourcePolicy" /></td>
    <td><code>string</code></td>
    <td>A JSON-formatted string that contains the permissions policy attached to the secret. For more information about permissions policies, see Authentication and access control for Secrets Manager.</td>
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
    <td><a href="#get_resource_policy"><CopyableCode code="get_resource_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the JSON text of the resource-based policy document attached to the secret. For more information about permissions policies attached to a secret, see Permissions policies attached to a secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:GetResourcePolicy. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#put_resource_policy"><CopyableCode code="put_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a>, <a href="#parameter-ResourcePolicy"><code>ResourcePolicy</code></a></td>
    <td></td>
    <td>Attaches a resource-based permission policy to a secret. A resource-based policy is optional. For more information, see Authentication and access control for Secrets Manager For information about attaching a policy in the console, see Attach a permissions policy to a secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:PutResourcePolicy. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the resource-based permission policy attached to the secret. To attach a policy to a secret, use PutResourcePolicy. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:DeleteResourcePolicy. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
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
    defaultValue="get_resource_policy"
    values={[
        { label: 'get_resource_policy', value: 'get_resource_policy' }
    ]}
>
<TabItem value="get_resource_policy">

Retrieves the JSON text of the resource-based policy document attached to the secret. For more information about permissions policies attached to a secret, see Permissions policies attached to a secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:GetResourcePolicy. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
SELECT
ARN,
Name,
ResourcePolicy
FROM aws.secretsmanager.resource_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_policy"
    values={[
        { label: 'put_resource_policy', value: 'put_resource_policy' }
    ]}
>
<TabItem value="put_resource_policy">

Attaches a resource-based permission policy to a secret. A resource-based policy is optional. For more information, see Authentication and access control for Secrets Manager For information about attaching a policy in the console, see Attach a permissions policy to a secret. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:PutResourcePolicy. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
REPLACE aws.secretsmanager.resource_policies
SET 
SecretId = '{{ SecretId }}',
ResourcePolicy = '{{ ResourcePolicy }}',
BlockPublicPolicy = {{ BlockPublicPolicy }}
WHERE 
region = '{{ region }}' --required
AND SecretId = '{{ SecretId }}' --required
AND ResourcePolicy = '{{ ResourcePolicy }}' --required
RETURNING
ARN,
Name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_policy"
    values={[
        { label: 'delete_resource_policy', value: 'delete_resource_policy' }
    ]}
>
<TabItem value="delete_resource_policy">

Deletes the resource-based permission policy attached to the secret. To attach a policy to a secret, use PutResourcePolicy. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:DeleteResourcePolicy. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
DELETE FROM aws.secretsmanager.resource_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
