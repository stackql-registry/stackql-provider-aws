--- 
title: encryption_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - encryption_configurations
  - iot
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

Creates, updates, deletes, gets or lists an <code>encryption_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="encryption_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.encryption_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_encryption_configuration"
    values={[
        { label: 'describe_encryption_configuration', value: 'describe_encryption_configuration' }
    ]}
>
<TabItem value="describe_encryption_configuration">

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
    <td><CopyableCode code="configurationDetails" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration details that include the status information of the KMS key and the KMS access role.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionType" /></td>
    <td><code>string</code></td>
    <td>The type of the KMS key. (CUSTOMER_MANAGED_KMS_KEY, AWS_OWNED_KMS_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role assumed by Amazon Web Services IoT Core to call KMS on behalf of the customer.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the customer managed KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when encryption configuration is last updated.</td>
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
    <td><a href="#describe_encryption_configuration"><CopyableCode code="describe_encryption_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the encryption configuration for resources and data of your Amazon Web Services account in Amazon Web Services IoT Core. For more information, see Data encryption at rest in the Amazon Web Services IoT Core Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_encryption_configuration"><CopyableCode code="update_encryption_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-encryptionType"><code>encryptionType</code></a></td>
    <td></td>
    <td>Updates the encryption configuration. By default, Amazon Web Services IoT Core encrypts your data at rest using Amazon Web Services owned keys. Amazon Web Services IoT Core also supports symmetric customer managed keys from Key Management Service (KMS). With customer managed keys, you create, own, and manage the KMS keys in your Amazon Web Services account. Before using this API, you must set up permissions for Amazon Web Services IoT Core to access KMS. For more information, see Data encryption at rest in the Amazon Web Services IoT Core Developer Guide.</td>
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
    defaultValue="describe_encryption_configuration"
    values={[
        { label: 'describe_encryption_configuration', value: 'describe_encryption_configuration' }
    ]}
>
<TabItem value="describe_encryption_configuration">

Retrieves the encryption configuration for resources and data of your Amazon Web Services account in Amazon Web Services IoT Core. For more information, see Data encryption at rest in the Amazon Web Services IoT Core Developer Guide.

```sql
SELECT
configurationDetails,
encryptionType,
kmsAccessRoleArn,
kmsKeyArn,
lastModifiedDate
FROM aws.iot.encryption_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_encryption_configuration"
    values={[
        { label: 'update_encryption_configuration', value: 'update_encryption_configuration' }
    ]}
>
<TabItem value="update_encryption_configuration">

Updates the encryption configuration. By default, Amazon Web Services IoT Core encrypts your data at rest using Amazon Web Services owned keys. Amazon Web Services IoT Core also supports symmetric customer managed keys from Key Management Service (KMS). With customer managed keys, you create, own, and manage the KMS keys in your Amazon Web Services account. Before using this API, you must set up permissions for Amazon Web Services IoT Core to access KMS. For more information, see Data encryption at rest in the Amazon Web Services IoT Core Developer Guide.

```sql
UPDATE aws.iot.encryption_configurations
SET 
encryptionType = '{{ encryptionType }}',
kmsKeyArn = '{{ kmsKeyArn }}',
kmsAccessRoleArn = '{{ kmsAccessRoleArn }}'
WHERE 
region = '{{ region }}' --required
AND encryptionType = '{{ encryptionType }}' --required;
```
</TabItem>
</Tabs>
