--- 
title: default_encryption_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - default_encryption_configurations
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>default_encryption_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_encryption_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.default_encryption_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_default_encryption_configuration"
    values={[
        { label: 'get_default_encryption_configuration', value: 'get_default_encryption_configuration' }
    ]}
>
<TabItem value="get_default_encryption_configuration">

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
    <td><CopyableCode code="configurationStatus" /></td>
    <td><code>object</code></td>
    <td>Provides the status of the default encryption configuration for an Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionType" /></td>
    <td><code>string</code></td>
    <td>The type of encryption used for the encryption configuration. (MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION, CUSTOMER_KEY_ENCRYPTION)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Key Amazon Resource Name (ARN) of the AWS KMS key used for KMS encryption if you use KMS_BASED_ENCRYPTION. (pattern: &lt;code&gt;arn:aws:kms:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:key/&#91;0-9a-zA-Z-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_default_encryption_configuration"><CopyableCode code="get_default_encryption_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified region. For more information, see Key management in the AWS IoT SiteWise User Guide.</td>
</tr>
<tr>
    <td><a href="#put_default_encryption_configuration"><CopyableCode code="put_default_encryption_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-encryptionType"><code>encryptionType</code></a></td>
    <td></td>
    <td>Sets the default encryption configuration for the Amazon Web Services account. For more information, see Key management in the AWS IoT SiteWise User Guide.</td>
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
    defaultValue="get_default_encryption_configuration"
    values={[
        { label: 'get_default_encryption_configuration', value: 'get_default_encryption_configuration' }
    ]}
>
<TabItem value="get_default_encryption_configuration">

Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified region. For more information, see Key management in the AWS IoT SiteWise User Guide.

```sql
SELECT
configurationStatus,
encryptionType,
kmsKeyArn
FROM aws.iot_managed_integrations.default_encryption_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_default_encryption_configuration"
    values={[
        { label: 'put_default_encryption_configuration', value: 'put_default_encryption_configuration' }
    ]}
>
<TabItem value="put_default_encryption_configuration">

Sets the default encryption configuration for the Amazon Web Services account. For more information, see Key management in the AWS IoT SiteWise User Guide.

```sql
REPLACE aws.iot_managed_integrations.default_encryption_configurations
SET 
encryptionType = '{{ encryptionType }}',
kmsKeyArn = '{{ kmsKeyArn }}'
WHERE 
region = '{{ region }}' --required
AND encryptionType = '{{ encryptionType }}' --required
RETURNING
configurationStatus,
encryptionType,
kmsKeyArn;
```
</TabItem>
</Tabs>
