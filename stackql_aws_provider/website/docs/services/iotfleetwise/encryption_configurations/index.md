--- 
title: encryption_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - encryption_configurations
  - iotfleetwise
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.encryption_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_encryption_configuration"
    values={[
        { label: 'get_encryption_configuration', value: 'get_encryption_configuration' }
    ]}
>
<TabItem value="get_encryption_configuration">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when encryption was configured in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_status" /></td>
    <td><code>string</code></td>
    <td>The encryption status. (PENDING, SUCCESS, FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption. Set to KMS_BASED_ENCRYPTION to use a KMS key that you own and manage. Set to FLEETWISE_DEFAULT_ENCRYPTION to use an Amazon Web Services managed key that is owned by the Amazon Web Services IoT FleetWise service account. (KMS_BASED_ENCRYPTION, FLEETWISE_DEFAULT_ENCRYPTION)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message that describes why encryption settings couldn't be configured, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key that is used for encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when encryption was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
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
    <td><a href="#get_encryption_configuration"><CopyableCode code="get_encryption_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the encryption configuration for resources and data in Amazon Web Services IoT FleetWise.</td>
</tr>
<tr>
    <td><a href="#put_encryption_configuration"><CopyableCode code="put_encryption_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-encryptionType"><code>encryptionType</code></a></td>
    <td></td>
    <td>Creates or updates the encryption configuration. Amazon Web Services IoT FleetWise can encrypt your data and resources using an Amazon Web Services managed key. Or, you can use a KMS key that you own and manage. For more information, see Data encryption in the Amazon Web Services IoT FleetWise Developer Guide.</td>
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
    defaultValue="get_encryption_configuration"
    values={[
        { label: 'get_encryption_configuration', value: 'get_encryption_configuration' }
    ]}
>
<TabItem value="get_encryption_configuration">

Retrieves the encryption configuration for resources and data in Amazon Web Services IoT FleetWise.

```sql
SELECT
creation_time,
encryption_status,
encryption_type,
error_message,
kms_key_id,
last_modification_time
FROM aws.iotfleetwise.encryption_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_encryption_configuration"
    values={[
        { label: 'put_encryption_configuration', value: 'put_encryption_configuration' }
    ]}
>
<TabItem value="put_encryption_configuration">

Creates or updates the encryption configuration. Amazon Web Services IoT FleetWise can encrypt your data and resources using an Amazon Web Services managed key. Or, you can use a KMS key that you own and manage. For more information, see Data encryption in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
REPLACE aws.iotfleetwise.encryption_configurations
SET 
kmsKeyId = '{{ kmsKeyId }}',
encryptionType = '{{ encryptionType }}'
WHERE 
region = '{{ region }}' --required
AND encryptionType = '{{ encryptionType }}' --required
RETURNING
encryption_status,
encryption_type,
kms_key_id;
```
</TabItem>
</Tabs>
