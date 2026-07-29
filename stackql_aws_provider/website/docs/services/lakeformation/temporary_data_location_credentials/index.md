--- 
title: temporary_data_location_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - temporary_data_location_credentials
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>temporary_data_location_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="temporary_data_location_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.temporary_data_location_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_temporary_data_location_credentials"
    values={[
        { label: 'get_temporary_data_location_credentials', value: 'get_temporary_data_location_credentials' }
    ]}
>
<TabItem value="get_temporary_data_location_credentials">

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
    <td><CopyableCode code="accessible_data_locations" /></td>
    <td><code>array</code></td>
    <td>Refers to the Amazon S3 locations that can be accessed through the GetTemporaryCredentialsForLocation API operation.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>object</code></td>
    <td>A temporary set of credentials for an Lake Formation user. These credentials are scoped down to only access the raw data sources that the user has access to. The temporary security credentials consist of an access key and a session token. The access key consists of an access key ID and a secret key. When the credentials are created, they are associated with an IAM access control policy that limits what the user can do when using the credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials_scope" /></td>
    <td><code>string</code></td>
    <td>The credential scope is determined by the caller's Lake Formation permission on the associated table. Credential scope can be either: READ - Provides read-only access to the data location. READ_WRITE - Provides both read and write access to the data location. (READ, READWRITE)</td>
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
    <td><a href="#get_temporary_data_location_credentials"><CopyableCode code="get_temporary_data_location_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows a user or application in a secure environment to access data in a specific Amazon S3 location registered with Lake Formation by providing temporary scoped credentials that are limited to the requested data location and the caller's authorized access level. GetDataAccess is logged in CloudTrail whenever a principal requests temporary data location credentials to access data in a data lake location that is registered with Lake Formation. The API operation returns an error in the following scenarios: The data location is not registered with Lake Formation. No Glue table is associated with the data location. The caller doesn't have required permissions on the associated table. The caller must have SELECT or SUPER permissions on the associated table, and credential vending for full table access must be enabled in the data lake settings. For more information, see Application integration for full table access. The data location is in a different Amazon Web Services Region. Lake Formation doesn't support cross-Region access when vending credentials for a data location. Lake Formation only supports Amazon S3 paths registered within the same Region as the API call.</td>
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
    defaultValue="get_temporary_data_location_credentials"
    values={[
        { label: 'get_temporary_data_location_credentials', value: 'get_temporary_data_location_credentials' }
    ]}
>
<TabItem value="get_temporary_data_location_credentials">

Allows a user or application in a secure environment to access data in a specific Amazon S3 location registered with Lake Formation by providing temporary scoped credentials that are limited to the requested data location and the caller's authorized access level. GetDataAccess is logged in CloudTrail whenever a principal requests temporary data location credentials to access data in a data lake location that is registered with Lake Formation. The API operation returns an error in the following scenarios: The data location is not registered with Lake Formation. No Glue table is associated with the data location. The caller doesn't have required permissions on the associated table. The caller must have SELECT or SUPER permissions on the associated table, and credential vending for full table access must be enabled in the data lake settings. For more information, see Application integration for full table access. The data location is in a different Amazon Web Services Region. Lake Formation doesn't support cross-Region access when vending credentials for a data location. Lake Formation only supports Amazon S3 paths registered within the same Region as the API call.

```sql
SELECT
accessible_data_locations,
credentials,
credentials_scope
FROM aws.lakeformation.temporary_data_location_credentials
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
