--- 
title: data_catalog_encryption_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - data_catalog_encryption_settings
  - glue
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

Creates, updates, deletes, gets or lists a <code>data_catalog_encryption_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_catalog_encryption_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.data_catalog_encryption_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_catalog_encryption_settings"
    values={[
        { label: 'get_data_catalog_encryption_settings', value: 'get_data_catalog_encryption_settings' }
    ]}
>
<TabItem value="get_data_catalog_encryption_settings">

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
    <td><CopyableCode code="connection_password_encryption" /></td>
    <td><code>object</code></td>
    <td>When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of CreateConnection or UpdateConnection and store it in the ENCRYPTED_PASSWORD field in the connection properties. You can enable catalog encryption or only password encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_at_rest" /></td>
    <td><code>object</code></td>
    <td>Specifies the encryption-at-rest configuration for the Data Catalog.</td>
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
    <td><a href="#get_data_catalog_encryption_settings"><CopyableCode code="get_data_catalog_encryption_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the security configuration for a specified catalog.</td>
</tr>
<tr>
    <td><a href="#put_data_catalog_encryption_settings"><CopyableCode code="put_data_catalog_encryption_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataCatalogEncryptionSettings"><code>DataCatalogEncryptionSettings</code></a></td>
    <td></td>
    <td>Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.</td>
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
    defaultValue="get_data_catalog_encryption_settings"
    values={[
        { label: 'get_data_catalog_encryption_settings', value: 'get_data_catalog_encryption_settings' }
    ]}
>
<TabItem value="get_data_catalog_encryption_settings">

Retrieves the security configuration for a specified catalog.

```sql
SELECT
connection_password_encryption,
encryption_at_rest
FROM aws.glue.data_catalog_encryption_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_data_catalog_encryption_settings"
    values={[
        { label: 'put_data_catalog_encryption_settings', value: 'put_data_catalog_encryption_settings' }
    ]}
>
<TabItem value="put_data_catalog_encryption_settings">

Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.

```sql
REPLACE aws.glue.data_catalog_encryption_settings
SET 
CatalogId = '{{ CatalogId }}',
DataCatalogEncryptionSettings = '{{ DataCatalogEncryptionSettings }}'
WHERE 
region = '{{ region }}' --required
AND DataCatalogEncryptionSettings = '{{ DataCatalogEncryptionSettings }}' --required;
```
</TabItem>
</Tabs>
