--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resource"
    values={[
        { label: 'describe_resource', value: 'describe_resource' },
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="describe_resource">

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
    <td><CopyableCode code="expected_resource_owner_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that owns the Glue tables associated with specific Amazon S3 locations. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hybrid_access_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role that registered a resource. (pattern: &lt;code&gt;arn:aws:iam::&#91;0-9&#93;*:role/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="verification_status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the registered role has sufficient permissions to access registered Amazon S3 location. Verification Status can be one of the following: VERIFIED - Registered role has sufficient permissions to access registered Amazon S3 location. NOT_VERIFIED - Registered role does not have sufficient permissions to access registered Amazon S3 location. VERIFICATION_FAILED - Unable to verify if the registered role can access the registered Amazon S3 location. (VERIFIED, VERIFICATION_FAILED, NOT_VERIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="with_federation" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the resource is a federated resource.</td>
</tr>
<tr>
    <td><CopyableCode code="with_privileged_access" /></td>
    <td><code>boolean</code></td>
    <td>Grants the calling principal the permissions to perform all supported Lake Formation operations on the registered data location.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resources">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A continuation token, if this is not the first call to retrieve these resources.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_info_list" /></td>
    <td><code>array</code></td>
    <td>A summary of the data lake resources.</td>
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
    <td><a href="#describe_resource"><CopyableCode code="describe_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current data access role for the given resource registered in Lake Formation.</td>
</tr>
<tr>
    <td><a href="#list_resources"><CopyableCode code="list_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the resources registered to be managed by the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#register_resource"><CopyableCode code="register_resource" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Registers the resource as managed by the Data Catalog. To add or update data, Lake Formation needs read/write access to the chosen data location. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy. The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location. ResourceArn = arn:aws:s3:::my-bucket/ UseServiceLinkedRole = true If UseServiceLinkedRole is not set to true, you must provide or set the RoleArn: arn:aws:iam::12345:role/my-data-access-role</td>
</tr>
<tr>
    <td><a href="#add_lf_tags_to_resource"><CopyableCode code="add_lf_tags_to_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Resource"><code>Resource</code></a>, <a href="#parameter-LFTags"><code>LFTags</code></a></td>
    <td></td>
    <td>Attaches one or more LF-tags to an existing resource.</td>
</tr>
<tr>
    <td><a href="#update_resource"><CopyableCode code="update_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Updates the data access role used for vending access to the given (registered) resource in Lake Formation.</td>
</tr>
<tr>
    <td><a href="#deregister_resource"><CopyableCode code="deregister_resource" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters the resource as managed by the Data Catalog. When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</td>
</tr>
<tr>
    <td><a href="#remove_lf_tags_from_resource"><CopyableCode code="remove_lf_tags_from_resource" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Resource"><code>Resource</code></a>, <a href="#parameter-LFTags"><code>LFTags</code></a></td>
    <td></td>
    <td>Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in tableWithColumns to specify column input.</td>
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
    defaultValue="describe_resource"
    values={[
        { label: 'describe_resource', value: 'describe_resource' },
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="describe_resource">

Retrieves the current data access role for the given resource registered in Lake Formation.

```sql
SELECT
expected_resource_owner_account,
hybrid_access_enabled,
last_modified,
resource_arn,
role_arn,
verification_status,
with_federation,
with_privileged_access
FROM aws.lakeformation.resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resources">

Lists the resources registered to be managed by the Data Catalog.

```sql
SELECT
next_token,
resource_info_list
FROM aws.lakeformation.resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_resource"
    values={[
        { label: 'register_resource', value: 'register_resource' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_resource">

Registers the resource as managed by the Data Catalog. To add or update data, Lake Formation needs read/write access to the chosen data location. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy. The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location. ResourceArn = arn:aws:s3:::my-bucket/ UseServiceLinkedRole = true If UseServiceLinkedRole is not set to true, you must provide or set the RoleArn: arn:aws:iam::12345:role/my-data-access-role

```sql
INSERT INTO aws.lakeformation.resources (
ResourceArn,
UseServiceLinkedRole,
RoleArn,
WithFederation,
HybridAccessEnabled,
WithPrivilegedAccess,
ExpectedResourceOwnerAccount,
region
)
SELECT 
'{{ ResourceArn }}' /* required */,
{{ UseServiceLinkedRole }},
'{{ RoleArn }}',
{{ WithFederation }},
{{ HybridAccessEnabled }},
{{ WithPrivilegedAccess }},
'{{ ExpectedResourceOwnerAccount }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resources resource.
    - name: ResourceArn
      value: "{{ ResourceArn }}"
    - name: UseServiceLinkedRole
      value: {{ UseServiceLinkedRole }}
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: WithFederation
      value: {{ WithFederation }}
    - name: HybridAccessEnabled
      value: {{ HybridAccessEnabled }}
    - name: WithPrivilegedAccess
      value: {{ WithPrivilegedAccess }}
    - name: ExpectedResourceOwnerAccount
      value: "{{ ExpectedResourceOwnerAccount }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_lf_tags_to_resource"
    values={[
        { label: 'add_lf_tags_to_resource', value: 'add_lf_tags_to_resource' },
        { label: 'update_resource', value: 'update_resource' }
    ]}
>
<TabItem value="add_lf_tags_to_resource">

Attaches one or more LF-tags to an existing resource.

```sql
UPDATE aws.lakeformation.resources
SET 
CatalogId = '{{ CatalogId }}',
Resource = '{{ Resource }}',
LFTags = '{{ LFTags }}'
WHERE 
region = '{{ region }}' --required
AND Resource = '{{ Resource }}' --required
AND LFTags = '{{ LFTags }}' --required
RETURNING
failures;
```
</TabItem>
<TabItem value="update_resource">

Updates the data access role used for vending access to the given (registered) resource in Lake Formation.

```sql
UPDATE aws.lakeformation.resources
SET 
RoleArn = '{{ RoleArn }}',
ResourceArn = '{{ ResourceArn }}',
WithFederation = {{ WithFederation }},
HybridAccessEnabled = {{ HybridAccessEnabled }},
ExpectedResourceOwnerAccount = '{{ ExpectedResourceOwnerAccount }}'
WHERE 
region = '{{ region }}' --required
AND RoleArn = '{{ RoleArn }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_resource"
    values={[
        { label: 'deregister_resource', value: 'deregister_resource' }
    ]}
>
<TabItem value="deregister_resource">

Deregisters the resource as managed by the Data Catalog. When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.

```sql
DELETE FROM aws.lakeformation.resources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_lf_tags_from_resource"
    values={[
        { label: 'remove_lf_tags_from_resource', value: 'remove_lf_tags_from_resource' }
    ]}
>
<TabItem value="remove_lf_tags_from_resource">

Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in tableWithColumns to specify column input.

```sql
EXEC aws.lakeformation.resources.remove_lf_tags_from_resource 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"Resource": "{{ Resource }}", 
"LFTags": "{{ LFTags }}"
}'
;
```
</TabItem>
</Tabs>
