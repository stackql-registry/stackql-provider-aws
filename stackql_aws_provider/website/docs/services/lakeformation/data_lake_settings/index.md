--- 
title: data_lake_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - data_lake_settings
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

Creates, updates, deletes, gets or lists a <code>data_lake_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_lake_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.data_lake_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_lake_settings"
    values={[
        { label: 'get_data_lake_settings', value: 'get_data_lake_settings' }
    ]}
>
<TabItem value="get_data_lake_settings">

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
    <td><CopyableCode code="allow_external_data_filtering" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow Amazon EMR clusters to access data managed by Lake Formation. If true, you allow Amazon EMR clusters to access data in Amazon S3 locations that are registered with Lake Formation. If false or null, no Amazon EMR clusters will be able to access data in Amazon S3 locations that are registered with Lake Formation. For more information, see (Optional) Allow external data filtering.</td>
</tr>
<tr>
    <td><CopyableCode code="allow_full_table_external_data_access" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow a third-party query engine to get data access credentials without session tags when a caller has full data access permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="authorized_session_tag_value_list" /></td>
    <td><code>array</code></td>
    <td>Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it. Lake Formation will publish the acceptable key-value pair, for example key = "LakeFormationTrustedCaller" and value = "TRUE" and the third party integrator must properly tag the temporary security credentials that will be used to call Lake Formation's administrative APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="create_database_default_permissions" /></td>
    <td><code>array</code></td>
    <td>Specifies whether access control on newly created database is managed by Lake Formation permissions or exclusively by IAM permissions. A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions. The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS. For more information, see Changing the Default Security Settings for Your Data Lake.</td>
</tr>
<tr>
    <td><CopyableCode code="create_table_default_permissions" /></td>
    <td><code>array</code></td>
    <td>Specifies whether access control on newly created table is managed by Lake Formation permissions or exclusively by IAM permissions. A null value indicates access control by Lake Formation permissions. A value that assigns ALL to IAM_ALLOWED_PRINCIPALS indicates access control by IAM permissions. This is referred to as the setting "Use only IAM access control," and is for backward compatibility with the Glue permission model implemented by IAM permissions. The only permitted values are an empty array or an array that contains a single JSON object that grants ALL to IAM_ALLOWED_PRINCIPALS. For more information, see Changing the Default Security Settings for Your Data Lake.</td>
</tr>
<tr>
    <td><CopyableCode code="data_lake_admins" /></td>
    <td><code>array</code></td>
    <td>A list of Lake Formation principals. Supported principals are IAM users or IAM roles.</td>
</tr>
<tr>
    <td><CopyableCode code="external_data_filtering_allow_list" /></td>
    <td><code>array</code></td>
    <td>A list of the account IDs of Amazon Web Services accounts with Amazon EMR clusters that are to perform data filtering.&gt;</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>A key-value map that provides an additional configuration on your data lake. The following key-value pairs are supported: CROSS_ACCOUNT_VERSION - Accepted values are 1, 2, 3, 4, and 5. SET_SOURCE_IDENTITY - Accepted values are TRUE and FALSE. When set to TRUE, Lake Formation includes the IAM role identifier that was used to query in the S3 data event CloudTrail logs for s3:GetObject calls. For more information, see Tracking query engine IAM roles in S3 data events.</td>
</tr>
<tr>
    <td><CopyableCode code="read_only_admins" /></td>
    <td><code>array</code></td>
    <td>A list of Lake Formation principals with only view access to the resources, without the ability to make changes. Supported principals are IAM users or IAM roles.</td>
</tr>
<tr>
    <td><CopyableCode code="trusted_resource_owners" /></td>
    <td><code>array</code></td>
    <td>A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's CloudTrail log. You may want to specify this property when you are in a high-trust boundary, such as the same team or company.</td>
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
    <td><a href="#get_data_lake_settings"><CopyableCode code="get_data_lake_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the list of the data lake administrators of a Lake Formation-managed data lake.</td>
</tr>
<tr>
    <td><a href="#put_data_lake_settings"><CopyableCode code="put_data_lake_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataLakeSettings"><code>DataLakeSettings</code></a></td>
    <td></td>
    <td>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see Granting Lake Formation Permissions. This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</td>
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
    defaultValue="get_data_lake_settings"
    values={[
        { label: 'get_data_lake_settings', value: 'get_data_lake_settings' }
    ]}
>
<TabItem value="get_data_lake_settings">

Retrieves the list of the data lake administrators of a Lake Formation-managed data lake.

```sql
SELECT
allow_external_data_filtering,
allow_full_table_external_data_access,
authorized_session_tag_value_list,
create_database_default_permissions,
create_table_default_permissions,
data_lake_admins,
external_data_filtering_allow_list,
parameters,
read_only_admins,
trusted_resource_owners
FROM aws.lakeformation.data_lake_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_data_lake_settings"
    values={[
        { label: 'put_data_lake_settings', value: 'put_data_lake_settings' }
    ]}
>
<TabItem value="put_data_lake_settings">

Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see Granting Lake Formation Permissions. This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.

```sql
REPLACE aws.lakeformation.data_lake_settings
SET 
CatalogId = '{{ CatalogId }}',
DataLakeSettings = '{{ DataLakeSettings }}'
WHERE 
region = '{{ region }}' --required
AND DataLakeSettings = '{{ DataLakeSettings }}' --required;
```
</TabItem>
</Tabs>
