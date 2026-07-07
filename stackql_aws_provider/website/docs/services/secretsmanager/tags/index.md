--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.secretsmanager.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td></td>
    <td>Attaches tags to a secret. Tags consist of a key name and a value. Tags are part of the secret's metadata. They are not associated with specific versions of the secret. This operation appends tags to the existing list of tags. For tag quotas and naming restrictions, see Service quotas for Tagging in the Amazon Web Services General Reference guide. If you use tags as part of your security strategy, then adding or removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:TagResource. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecretId"><code>SecretId</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a></td>
    <td></td>
    <td>Removes specific tags from a secret. This operation is idempotent. If a requested tag is not attached to the secret, no error is returned and the secret metadata is unchanged. If you use tags as part of your security strategy, then removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:UntagResource. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="tag_resource"
    values={[
        { label: 'tag_resource', value: 'tag_resource' },
        { label: 'untag_resource', value: 'untag_resource' }
    ]}
>
<TabItem value="tag_resource">

Attaches tags to a secret. Tags consist of a key name and a value. Tags are part of the secret's metadata. They are not associated with specific versions of the secret. This operation appends tags to the existing list of tags. For tag quotas and naming restrictions, see Service quotas for Tagging in the Amazon Web Services General Reference guide. If you use tags as part of your security strategy, then adding or removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:TagResource. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
UPDATE aws.secretsmanager.tags
SET 
SecretId = '{{ SecretId }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND SecretId = '{{ SecretId }}' --required
AND Tags = '{{ Tags }}' --required;
```
</TabItem>
<TabItem value="untag_resource">

Removes specific tags from a secret. This operation is idempotent. If a requested tag is not attached to the secret, no error is returned and the secret metadata is unchanged. If you use tags as part of your security strategy, then removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error. Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see Logging Secrets Manager events with CloudTrail. Required permissions: secretsmanager:UntagResource. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.

```sql
UPDATE aws.secretsmanager.tags
SET 
SecretId = '{{ SecretId }}',
TagKeys = '{{ TagKeys }}'
WHERE 
region = '{{ region }}' --required
AND SecretId = '{{ SecretId }}' --required
AND TagKeys = '{{ TagKeys }}' --required;
```
</TabItem>
</Tabs>
