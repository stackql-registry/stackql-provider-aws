--- 
title: namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - namespaces
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.namespaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_namespace"
    values={[
        { label: 'get_namespace', value: 'get_namespace' },
        { label: 'list_namespaces', value: 'list_namespaces' }
    ]}
>
<TabItem value="get_namespace">

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
    <td><CopyableCode code="admin_password_secret_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.</td>
</tr>
<tr>
    <td><CopyableCode code="admin_password_secret_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.</td>
</tr>
<tr>
    <td><CopyableCode code="admin_username" /></td>
    <td><code>string</code></td>
    <td>The username of the administrator for the first database created in the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Glue Data Catalog associated with the namespace enabled with Amazon Redshift federated permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of when the namespace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_name" /></td>
    <td><code>string</code></td>
    <td>The name of the first database created in the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="default_iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_roles" /></td>
    <td><code>array</code></td>
    <td>A list of IAM roles to associate with the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</td>
</tr>
<tr>
    <td><CopyableCode code="lakehouse_registration_status" /></td>
    <td><code>string</code></td>
    <td>The status of the lakehouse registration for the namespace. Indicates whether the namespace is successfully registered with Amazon Redshift federated permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="log_exports" /></td>
    <td><code>array</code></td>
    <td>The types of logs the namespace can export. Available export types are User log, Connection log, and User activity log.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with a namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace. Must be between 3-64 alphanumeric characters in lowercase, and it cannot be a reserved word. A list of reserved words can be found in Reserved Words in the Amazon Redshift Database Developer Guide. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_table_publish_status" /></td>
    <td><code>object</code></td>
    <td>The current Amazon S3 Tables log-publishing status for the namespace. Not returned when S3 Tables publishing has never been configured for the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the namespace. (AVAILABLE, MODIFYING, DELETING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_namespaces">

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
    <td><CopyableCode code="admin_password_secret_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.</td>
</tr>
<tr>
    <td><CopyableCode code="admin_password_secret_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.</td>
</tr>
<tr>
    <td><CopyableCode code="admin_username" /></td>
    <td><code>string</code></td>
    <td>The username of the administrator for the first database created in the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="catalog_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Glue Data Catalog associated with the namespace enabled with Amazon Redshift federated permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of when the namespace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_name" /></td>
    <td><code>string</code></td>
    <td>The name of the first database created in the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="default_iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_roles" /></td>
    <td><code>array</code></td>
    <td>A list of IAM roles to associate with the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</td>
</tr>
<tr>
    <td><CopyableCode code="lakehouse_registration_status" /></td>
    <td><code>string</code></td>
    <td>The status of the lakehouse registration for the namespace. Indicates whether the namespace is successfully registered with Amazon Redshift federated permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="log_exports" /></td>
    <td><code>array</code></td>
    <td>The types of logs the namespace can export. Available export types are User log, Connection log, and User activity log.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with a namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace. Must be between 3-64 alphanumeric characters in lowercase, and it cannot be a reserved word. A list of reserved words can be found in Reserved Words in the Amazon Redshift Database Developer Guide. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_table_publish_status" /></td>
    <td><code>object</code></td>
    <td>The current Amazon S3 Tables log-publishing status for the namespace. Not returned when S3 Tables publishing has never been configured for the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the namespace. (AVAILABLE, MODIFYING, DELETING)</td>
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
    <td><a href="#get_namespace"><CopyableCode code="get_namespace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a namespace in Amazon Redshift Serverless.</td>
</tr>
<tr>
    <td><a href="#list_namespaces"><CopyableCode code="list_namespaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a list of specified namespaces.</td>
</tr>
<tr>
    <td><a href="#create_namespace"><CopyableCode code="create_namespace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a></td>
    <td></td>
    <td>Creates a namespace in Amazon Redshift Serverless.</td>
</tr>
<tr>
    <td><a href="#update_namespace"><CopyableCode code="update_namespace" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a></td>
    <td></td>
    <td>Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both adminUsername and adminUserPassword to update either field, but you can't update both kmsKeyId and logExports in a single request. Similarly, an S3 Tables log-publishing update (a request where logDestinationType is s3table) cannot be combined with any other namespace configuration change and must be submitted as its own request.</td>
</tr>
<tr>
    <td><a href="#delete_namespace"><CopyableCode code="delete_namespace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.</td>
</tr>
<tr>
    <td><a href="#restore_from_snapshot"><CopyableCode code="restore_from_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-workgroupName"><code>workgroupName</code></a></td>
    <td></td>
    <td>Restores a namespace from a snapshot.</td>
</tr>
<tr>
    <td><a href="#restore_table_from_snapshot"><CopyableCode code="restore_table_from_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-newTableName"><code>newTableName</code></a>, <a href="#parameter-snapshotName"><code>snapshotName</code></a>, <a href="#parameter-sourceDatabaseName"><code>sourceDatabaseName</code></a>, <a href="#parameter-sourceTableName"><code>sourceTableName</code></a>, <a href="#parameter-workgroupName"><code>workgroupName</code></a></td>
    <td></td>
    <td>Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with interleaved sort keys.</td>
</tr>
<tr>
    <td><a href="#update_lakehouse_configuration"><CopyableCode code="update_lakehouse_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a></td>
    <td></td>
    <td>Modifies the lakehouse configuration for a namespace. This operation allows you to manage Amazon Redshift federated permissions and Amazon Web Services IAM Identity Center trusted identity propagation.</td>
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
    defaultValue="get_namespace"
    values={[
        { label: 'get_namespace', value: 'get_namespace' },
        { label: 'list_namespaces', value: 'list_namespaces' }
    ]}
>
<TabItem value="get_namespace">

Returns information about a namespace in Amazon Redshift Serverless.

```sql
SELECT
admin_password_secret_arn,
admin_password_secret_kms_key_id,
admin_username,
catalog_arn,
creation_date,
db_name,
default_iam_role_arn,
iam_roles,
kms_key_id,
lakehouse_registration_status,
log_exports,
namespace_arn,
namespace_id,
namespace_name,
s_3_table_publish_status,
status
FROM aws.redshift_serverless.namespaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_namespaces">

Returns information about a list of specified namespaces.

```sql
SELECT
admin_password_secret_arn,
admin_password_secret_kms_key_id,
admin_username,
catalog_arn,
creation_date,
db_name,
default_iam_role_arn,
iam_roles,
kms_key_id,
lakehouse_registration_status,
log_exports,
namespace_arn,
namespace_id,
namespace_name,
s_3_table_publish_status,
status
FROM aws.redshift_serverless.namespaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_namespace"
    values={[
        { label: 'create_namespace', value: 'create_namespace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_namespace">

Creates a namespace in Amazon Redshift Serverless.

```sql
INSERT INTO aws.redshift_serverless.namespaces (
adminPasswordSecretKmsKeyId,
adminUserPassword,
adminUsername,
dbName,
defaultIamRoleArn,
iamRoles,
kmsKeyId,
logExports,
manageAdminPassword,
namespaceName,
redshiftIdcApplicationArn,
tags,
region
)
SELECT 
'{{ adminPasswordSecretKmsKeyId }}',
'{{ adminUserPassword }}',
'{{ adminUsername }}',
'{{ dbName }}',
'{{ defaultIamRoleArn }}',
'{{ iamRoles }}',
'{{ kmsKeyId }}',
'{{ logExports }}',
{{ manageAdminPassword }},
'{{ namespaceName }}' /* required */,
'{{ redshiftIdcApplicationArn }}',
'{{ tags }}',
'{{ region }}'
RETURNING
namespace
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: namespaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the namespaces resource.
    - name: adminPasswordSecretKmsKeyId
      value: "{{ adminPasswordSecretKmsKeyId }}"
      description: |
        The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. You can only use this parameter if manageAdminPassword is true.
    - name: adminUserPassword
      value: "{{ adminUserPassword }}"
      description: |
        The password of the administrator for the first database created in the namespace. You can't use adminUserPassword if manageAdminPassword is true.
    - name: adminUsername
      value: "{{ adminUsername }}"
      description: |
        The username of the administrator for the first database created in the namespace.
    - name: dbName
      value: "{{ dbName }}"
      description: |
        The name of the first database created in the namespace.
    - name: defaultIamRoleArn
      value: "{{ defaultIamRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.
    - name: iamRoles
      value:
        - "{{ iamRoles }}"
      description: |
        A list of IAM roles to associate with the namespace.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The ID of the Amazon Web Services Key Management Service key used to encrypt your data.
    - name: logExports
      value:
        - "{{ logExports }}"
      description: |
        The types of logs the namespace can export. Available export types are userlog, connectionlog, and useractivitylog.
    - name: manageAdminPassword
      value: {{ manageAdminPassword }}
      description: |
        If true, Amazon Redshift uses Secrets Manager to manage the namespace's admin credentials. You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password.
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: |
        The name of the namespace.
    - name: redshiftIdcApplicationArn
      value: "{{ redshiftIdcApplicationArn }}"
      description: |
        The ARN for the Redshift application that integrates with IAM Identity Center.
    - name: tags
      description: |
        A list of tag instances.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_namespace"
    values={[
        { label: 'update_namespace', value: 'update_namespace' }
    ]}
>
<TabItem value="update_namespace">

Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both adminUsername and adminUserPassword to update either field, but you can't update both kmsKeyId and logExports in a single request. Similarly, an S3 Tables log-publishing update (a request where logDestinationType is s3table) cannot be combined with any other namespace configuration change and must be submitted as its own request.

```sql
UPDATE aws.redshift_serverless.namespaces
SET 
adminPasswordSecretKmsKeyId = '{{ adminPasswordSecretKmsKeyId }}',
adminUserPassword = '{{ adminUserPassword }}',
adminUsername = '{{ adminUsername }}',
defaultIamRoleArn = '{{ defaultIamRoleArn }}',
iamRoles = '{{ iamRoles }}',
kmsKeyId = '{{ kmsKeyId }}',
logDestinationType = '{{ logDestinationType }}',
logExports = '{{ logExports }}',
manageAdminPassword = {{ manageAdminPassword }},
namespaceName = '{{ namespaceName }}',
s3TableAction = '{{ s3TableAction }}',
s3TableGranularity = '{{ s3TableGranularity }}',
s3TableKmsKeyId = '{{ s3TableKmsKeyId }}',
s3TableNames = '{{ s3TableNames }}'
WHERE 
region = '{{ region }}' --required
AND namespaceName = '{{ namespaceName }}' --required
RETURNING
namespace;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_namespace"
    values={[
        { label: 'delete_namespace', value: 'delete_namespace' }
    ]}
>
<TabItem value="delete_namespace">

Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.

```sql
DELETE FROM aws.redshift_serverless.namespaces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_from_snapshot"
    values={[
        { label: 'restore_from_snapshot', value: 'restore_from_snapshot' },
        { label: 'restore_table_from_snapshot', value: 'restore_table_from_snapshot' },
        { label: 'update_lakehouse_configuration', value: 'update_lakehouse_configuration' }
    ]}
>
<TabItem value="restore_from_snapshot">

Restores a namespace from a snapshot.

```sql
EXEC aws.redshift_serverless.namespaces.restore_from_snapshot 
@region='{{ region }}' --required 
@@json=
'{
"adminPasswordSecretKmsKeyId": "{{ adminPasswordSecretKmsKeyId }}", 
"maintainIntegration": {{ maintainIntegration }}, 
"manageAdminPassword": {{ manageAdminPassword }}, 
"namespaceName": "{{ namespaceName }}", 
"ownerAccount": "{{ ownerAccount }}", 
"snapshotArn": "{{ snapshotArn }}", 
"snapshotName": "{{ snapshotName }}", 
"workgroupName": "{{ workgroupName }}"
}'
;
```
</TabItem>
<TabItem value="restore_table_from_snapshot">

Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with interleaved sort keys.

```sql
EXEC aws.redshift_serverless.namespaces.restore_table_from_snapshot 
@region='{{ region }}' --required 
@@json=
'{
"activateCaseSensitiveIdentifier": {{ activateCaseSensitiveIdentifier }}, 
"namespaceName": "{{ namespaceName }}", 
"newTableName": "{{ newTableName }}", 
"snapshotName": "{{ snapshotName }}", 
"sourceDatabaseName": "{{ sourceDatabaseName }}", 
"sourceSchemaName": "{{ sourceSchemaName }}", 
"sourceTableName": "{{ sourceTableName }}", 
"targetDatabaseName": "{{ targetDatabaseName }}", 
"targetSchemaName": "{{ targetSchemaName }}", 
"workgroupName": "{{ workgroupName }}"
}'
;
```
</TabItem>
<TabItem value="update_lakehouse_configuration">

Modifies the lakehouse configuration for a namespace. This operation allows you to manage Amazon Redshift federated permissions and Amazon Web Services IAM Identity Center trusted identity propagation.

```sql
EXEC aws.redshift_serverless.namespaces.update_lakehouse_configuration 
@region='{{ region }}' --required 
@@json=
'{
"catalogName": "{{ catalogName }}", 
"dryRun": {{ dryRun }}, 
"lakehouseIdcApplicationArn": "{{ lakehouseIdcApplicationArn }}", 
"lakehouseIdcRegistration": "{{ lakehouseIdcRegistration }}", 
"lakehouseRegistration": "{{ lakehouseRegistration }}", 
"namespaceName": "{{ namespaceName }}"
}'
;
```
</TabItem>
</Tabs>
