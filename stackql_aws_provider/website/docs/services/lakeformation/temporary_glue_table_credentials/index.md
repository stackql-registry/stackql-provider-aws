--- 
title: temporary_glue_table_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - temporary_glue_table_credentials
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

Creates, updates, deletes, gets or lists a <code>temporary_glue_table_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="temporary_glue_table_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.temporary_glue_table_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_temporary_glue_table_credentials"
    values={[
        { label: 'get_temporary_glue_table_credentials', value: 'get_temporary_glue_table_credentials' }
    ]}
>
<TabItem value="get_temporary_glue_table_credentials">

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
    <td><CopyableCode code="AccessKeyId" /></td>
    <td><code>string</code></td>
    <td>The access key ID for the temporary credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="Expiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the temporary credentials expire.</td>
</tr>
<tr>
    <td><CopyableCode code="SecretAccessKey" /></td>
    <td><code>string</code></td>
    <td>The secret key for the temporary credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="SessionToken" /></td>
    <td><code>string</code></td>
    <td>The session token for the temporary credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="VendedS3Path" /></td>
    <td><code>array</code></td>
    <td>The Amazon S3 path for the temporary credentials.</td>
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
    <td><a href="#get_temporary_glue_table_credentials"><CopyableCode code="get_temporary_glue_table_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix. To call this API, the role that the service assumes must have lakeformation:GetDataAccess permission on the resource.</td>
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
    defaultValue="get_temporary_glue_table_credentials"
    values={[
        { label: 'get_temporary_glue_table_credentials', value: 'get_temporary_glue_table_credentials' }
    ]}
>
<TabItem value="get_temporary_glue_table_credentials">

Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix. To call this API, the role that the service assumes must have lakeformation:GetDataAccess permission on the resource.

```sql
SELECT
AccessKeyId,
Expiration,
SecretAccessKey,
SessionToken,
VendedS3Path
FROM aws.lakeformation.temporary_glue_table_credentials
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
