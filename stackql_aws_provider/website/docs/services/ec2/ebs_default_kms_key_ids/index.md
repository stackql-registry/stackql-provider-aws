--- 
title: ebs_default_kms_key_ids
hide_title: false
hide_table_of_contents: false
keywords:
  - ebs_default_kms_key_ids
  - ec2
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

Creates, updates, deletes, gets or lists an <code>ebs_default_kms_key_ids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ebs_default_kms_key_ids" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ebs_default_kms_key_ids" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ebs_default_kms_key_id"
    values={[
        { label: 'get_ebs_default_kms_key_id', value: 'get_ebs_default_kms_key_id' }
    ]}
>
<TabItem value="get_ebs_default_kms_key_id">

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
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the default KMS key for encryption by default.</td>
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
    <td><a href="#get_ebs_default_kms_key_id"><CopyableCode code="get_ebs_default_kms_key_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the default KMS key for EBS encryption by default for your account in this Region. For more information, see Amazon EBS encryption in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_ebs_default_kms_key_id"><CopyableCode code="modify_ebs_default_kms_key_id" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Changes the default KMS key for EBS encryption by default for your account in this Region. Amazon Web Services creates a unique Amazon Web Services managed KMS key in each Region for use with encryption by default. If you change the default KMS key to a symmetric customer managed KMS key, it is used instead of the Amazon Web Services managed KMS key. Amazon EBS does not support asymmetric KMS keys. If you delete or disable the customer managed KMS key that you specified for use with encryption by default, your instances will fail to launch. For more information, see Amazon EBS encryption in the Amazon EBS User Guide.</td>
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
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the KMS key to use for Amazon EBS encryption. If this parameter is not specified, your KMS key for Amazon EBS is used. If KmsKeyId is specified, the encrypted state must be true. You can specify the KMS key using any of the following: Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab. Key alias. For example, alias/ExampleAlias. Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab. Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias. Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails. Amazon EBS does not support asymmetric KMS keys.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ebs_default_kms_key_id"
    values={[
        { label: 'get_ebs_default_kms_key_id', value: 'get_ebs_default_kms_key_id' }
    ]}
>
<TabItem value="get_ebs_default_kms_key_id">

Describes the default KMS key for EBS encryption by default for your account in this Region. For more information, see Amazon EBS encryption in the Amazon EBS User Guide.

```sql
SELECT
KmsKeyId
FROM aws.ec2.ebs_default_kms_key_ids
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_ebs_default_kms_key_id"
    values={[
        { label: 'modify_ebs_default_kms_key_id', value: 'modify_ebs_default_kms_key_id' }
    ]}
>
<TabItem value="modify_ebs_default_kms_key_id">

Changes the default KMS key for EBS encryption by default for your account in this Region. Amazon Web Services creates a unique Amazon Web Services managed KMS key in each Region for use with encryption by default. If you change the default KMS key to a symmetric customer managed KMS key, it is used instead of the Amazon Web Services managed KMS key. Amazon EBS does not support asymmetric KMS keys. If you delete or disable the customer managed KMS key that you specified for use with encryption by default, your instances will fail to launch. For more information, see Amazon EBS encryption in the Amazon EBS User Guide.

```sql
UPDATE aws.ec2.ebs_default_kms_key_ids
SET 
-- No updatable properties
WHERE 
KmsKeyId = '{{ KmsKeyId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
KmsKeyId;
```
</TabItem>
</Tabs>
