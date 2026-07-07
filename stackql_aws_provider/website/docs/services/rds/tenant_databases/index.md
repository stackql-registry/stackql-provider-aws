--- 
title: tenant_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - tenant_databases
  - rds
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

Creates, updates, deletes, gets or lists a <code>tenant_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenant_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.tenant_databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tenant_databases"
    values={[
        { label: 'describe_tenant_databases', value: 'describe_tenant_databases' }
    ]}
>
<TabItem value="describe_tenant_databases">

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
    <td><CopyableCode code="CharacterSetName" /></td>
    <td><code>string</code></td>
    <td>The character set of the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the DB instance that contains the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="DbiResourceId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region-unique, immutable identifier for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionProtection" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether deletion protection is enabled for the DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MasterUserSecret" /></td>
    <td><code>string</code></td>
    <td>Contains the secret managed by RDS in Amazon Web Services Secrets Manager for the master user password. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide and Password management with Amazon Web Services Secrets Manager in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>The master username of the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="NcharCharacterSetName" /></td>
    <td><code>string</code></td>
    <td>The NCHAR character set name of the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="PendingModifiedValues" /></td>
    <td><code>string</code></td>
    <td>Information about pending changes for a tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="TagList" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="TenantDBName" /></td>
    <td><code>string</code></td>
    <td>The database name of the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="TenantDatabaseARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="TenantDatabaseCreateTime" /></td>
    <td><code>string</code></td>
    <td>The creation time of the tenant database.</td>
</tr>
<tr>
    <td><CopyableCode code="TenantDatabaseResourceId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region-unique, immutable identifier for the tenant database.</td>
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
    <td><a href="#describe_tenant_databases"><CopyableCode code="describe_tenant_databases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-TenantDBName"><code>TenantDBName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Describes the tenant databases in a DB instance that uses the multi-tenant configuration. Only RDS for Oracle CDB instances are supported.</td>
</tr>
<tr>
    <td><a href="#create_tenant_database"><CopyableCode code="create_tenant_database" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-TenantDBName"><code>TenantDBName</code></a>, <a href="#parameter-MasterUsername"><code>MasterUsername</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-CharacterSetName"><code>CharacterSetName</code></a>, <a href="#parameter-NcharCharacterSetName"><code>NcharCharacterSetName</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a tenant database in a DB instance that uses the multi-tenant configuration. Only RDS for Oracle container database (CDB) instances are supported.</td>
</tr>
<tr>
    <td><a href="#modify_tenant_database"><CopyableCode code="modify_tenant_database" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-TenantDBName"><code>TenantDBName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MasterUserPassword"><code>MasterUserPassword</code></a>, <a href="#parameter-NewTenantDBName"><code>NewTenantDBName</code></a>, <a href="#parameter-ManageMasterUserPassword"><code>ManageMasterUserPassword</code></a>, <a href="#parameter-RotateMasterUserPassword"><code>RotateMasterUserPassword</code></a>, <a href="#parameter-MasterUserSecretKmsKeyId"><code>MasterUserSecretKmsKeyId</code></a></td>
    <td>Modifies an existing tenant database in a DB instance. You can change the tenant database name or the master user password. This operation is supported only for RDS for Oracle CDB instances using the multi-tenant configuration.</td>
</tr>
<tr>
    <td><a href="#delete_tenant_database"><CopyableCode code="delete_tenant_database" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-TenantDBName"><code>TenantDBName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SkipFinalSnapshot"><code>SkipFinalSnapshot</code></a>, <a href="#parameter-FinalDBSnapshotIdentifier"><code>FinalDBSnapshotIdentifier</code></a></td>
    <td>Deletes a tenant database from your DB instance. This command only applies to RDS for Oracle container database (CDB) instances. You can't delete a tenant database when it is the only tenant in the DB instance.</td>
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
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied identifier for the DB instance that contains the tenant database that you want to delete.</td>
</tr>
<tr id="parameter-MasterUsername">
    <td><CopyableCode code="MasterUsername" /></td>
    <td><code>string</code></td>
    <td>The name for the master user account in your tenant database. RDS creates this user account in the tenant database and grants privileges to the master user. This parameter is case-sensitive. Constraints: Must be 1 to 16 letters, numbers, or underscores. First character must be a letter. Can't be a reserved word for the chosen database engine.</td>
</tr>
<tr id="parameter-TenantDBName">
    <td><CopyableCode code="TenantDBName" /></td>
    <td><code>string</code></td>
    <td>The user-supplied name of the tenant database that you want to remove from your DB instance. Amazon RDS deletes the tenant database with this name. This parameter isn’t case-sensitive.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CharacterSetName">
    <td><CopyableCode code="CharacterSetName" /></td>
    <td><code>string</code></td>
    <td>The character set for your tenant database. If you don't specify a value, the character set name defaults to AL32UTF8.</td>
</tr>
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied DB instance identifier, which must match the identifier of an existing instance owned by the Amazon Web Services account. This parameter isn't case-sensitive.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more database tenants to describe. Supported filters: tenant-db-name - Tenant database names. The results list only includes information about the tenant databases that match these tenant DB names. tenant-database-resource-id - Tenant database resource identifiers. dbi-resource-id - DB instance resource identifiers. The results list only includes information about the tenants contained within the DB instances identified by these resource identifiers.</td>
</tr>
<tr id="parameter-FinalDBSnapshotIdentifier">
    <td><CopyableCode code="FinalDBSnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DBSnapshotIdentifier of the new DBSnapshot created when the SkipFinalSnapshot parameter is disabled. If you enable this parameter and also enable SkipFinalShapshot, the command results in an error.</td>
</tr>
<tr id="parameter-ManageMasterUserPassword">
    <td><CopyableCode code="ManageMasterUserPassword" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. If the tenant database doesn't manage the master user password with Amazon Web Services Secrets Manager, you can turn on this management. In this case, you can't specify MasterUserPassword. If the tenant database already manages the master user password with Amazon Web Services Secrets Manager, and you specify that the master user password is not managed with Amazon Web Services Secrets Manager, then you must specify MasterUserPassword. In this case, Amazon RDS deletes the secret and uses the new password for the master user specified by MasterUserPassword. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide. Constraints: Can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeTenantDatabases request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MasterUserPassword">
    <td><CopyableCode code="MasterUserPassword" /></td>
    <td><code>string</code></td>
    <td>The new password for the master user of the specified tenant database in your DB instance. Amazon RDS operations never return the password, so this action provides a way to regain access to a tenant database user if the password is lost. This includes restoring privileges that might have been accidentally revoked. Constraints: Can include any printable ASCII character except /, " (double quote), @, & (ampersand), and ' (single quote). Length constraints: Must contain between 8 and 30 characters.</td>
</tr>
<tr id="parameter-MasterUserSecretKmsKeyId">
    <td><CopyableCode code="MasterUserSecretKmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if both of the following conditions are met: The tenant database doesn't manage the master user password in Amazon Web Services Secrets Manager. If the tenant database already manages the master user password in Amazon Web Services Secrets Manager, you can't change the KMS key used to encrypt the secret. You're turning on ManageMasterUserPassword to manage the master user password in Amazon Web Services Secrets Manager. If you're turning on ManageMasterUserPassword and don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a self-managed KMS key. The Amazon Web Services KMS key identifier is any of the following: Key ARN Key ID Alias ARN Alias name for the KMS key To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. A default KMS key exists for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results.</td>
</tr>
<tr id="parameter-NcharCharacterSetName">
    <td><CopyableCode code="NcharCharacterSetName" /></td>
    <td><code>string</code></td>
    <td>The NCHAR value for the tenant database.</td>
</tr>
<tr id="parameter-NewTenantDBName">
    <td><CopyableCode code="NewTenantDBName" /></td>
    <td><code>string</code></td>
    <td>The new name of the tenant database when renaming a tenant database. This parameter isn’t case-sensitive. Constraints: Can't be the string null or any other reserved word. Can't be longer than 8 characters.</td>
</tr>
<tr id="parameter-RotateMasterUserPassword">
    <td><CopyableCode code="RotateMasterUserPassword" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the master user password. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance. The secret value contains the updated password. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide. Constraints: You must apply the change immediately when rotating the master user password.</td>
</tr>
<tr id="parameter-SkipFinalSnapshot">
    <td><CopyableCode code="SkipFinalSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to skip the creation of a final DB snapshot before removing the tenant database from your DB instance. If you enable this parameter, RDS doesn't create a DB snapshot. If you don't enable this parameter, RDS creates a DB snapshot before it deletes the tenant database. By default, RDS doesn't skip the final snapshot. If you don't enable this parameter, you must specify the FinalDBSnapshotIdentifier parameter.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr id="parameter-TenantDBName">
    <td><CopyableCode code="TenantDBName" /></td>
    <td><code>string</code></td>
    <td>The user-supplied tenant database name, which must match the name of an existing tenant database on the specified DB instance owned by your Amazon Web Services account. This parameter isn’t case-sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_tenant_databases"
    values={[
        { label: 'describe_tenant_databases', value: 'describe_tenant_databases' }
    ]}
>
<TabItem value="describe_tenant_databases">

Describes the tenant databases in a DB instance that uses the multi-tenant configuration. Only RDS for Oracle CDB instances are supported.

```sql
SELECT
CharacterSetName,
DBInstanceIdentifier,
DbiResourceId,
DeletionProtection,
MasterUserSecret,
MasterUsername,
NcharCharacterSetName,
PendingModifiedValues,
Status,
TagList,
TenantDBName,
TenantDatabaseARN,
TenantDatabaseCreateTime,
TenantDatabaseResourceId
FROM aws.rds.tenant_databases
WHERE region = '{{ region }}' -- required
AND DBInstanceIdentifier = '{{ DBInstanceIdentifier }}'
AND TenantDBName = '{{ TenantDBName }}'
AND Filters = '{{ Filters }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tenant_database"
    values={[
        { label: 'create_tenant_database', value: 'create_tenant_database' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tenant_database">

Creates a tenant database in a DB instance that uses the multi-tenant configuration. Only RDS for Oracle container database (CDB) instances are supported.

```sql
INSERT INTO aws.rds.tenant_databases (
DBInstanceIdentifier,
TenantDBName,
MasterUsername,
region,
MasterUserPassword,
CharacterSetName,
NcharCharacterSetName,
ManageMasterUserPassword,
MasterUserSecretKmsKeyId,
Tags
)
SELECT 
'{{ DBInstanceIdentifier }}',
'{{ TenantDBName }}',
'{{ MasterUsername }}',
'{{ region }}',
'{{ MasterUserPassword }}',
'{{ CharacterSetName }}',
'{{ NcharCharacterSetName }}',
'{{ ManageMasterUserPassword }}',
'{{ MasterUserSecretKmsKeyId }}',
'{{ Tags }}'
RETURNING
CharacterSetName,
DBInstanceIdentifier,
DbiResourceId,
DeletionProtection,
MasterUserSecret,
MasterUsername,
NcharCharacterSetName,
PendingModifiedValues,
Status,
TagList,
TenantDBName,
TenantDatabaseARN,
TenantDatabaseCreateTime,
TenantDatabaseResourceId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tenant_databases
  props:
    - name: DBInstanceIdentifier
      value: "{{ DBInstanceIdentifier }}"
      description: Required parameter for the tenant_databases resource.
    - name: TenantDBName
      value: "{{ TenantDBName }}"
      description: Required parameter for the tenant_databases resource.
    - name: MasterUsername
      value: "{{ MasterUsername }}"
      description: Required parameter for the tenant_databases resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tenant_databases resource.
    - name: MasterUserPassword
      value: "{{ MasterUserPassword }}"
      description: The password for the master user in your tenant database. Constraints: Must be 8 to 30 characters. Can include any printable ASCII character except forward slash (/), double quote ("), at symbol (@), ampersand (&), or single quote ('). Can't be specified when ManageMasterUserPassword is enabled.
      description: The password for the master user in your tenant database. Constraints: Must be 8 to 30 characters. Can include any printable ASCII character except forward slash (/), double quote ("), at symbol (@), ampersand (&), or single quote ('). Can't be specified when ManageMasterUserPassword is enabled.
    - name: CharacterSetName
      value: "{{ CharacterSetName }}"
      description: The character set for your tenant database. If you don't specify a value, the character set name defaults to AL32UTF8.
      description: The character set for your tenant database. If you don't specify a value, the character set name defaults to AL32UTF8.
    - name: NcharCharacterSetName
      value: "{{ NcharCharacterSetName }}"
      description: The NCHAR value for the tenant database.
      description: The NCHAR value for the tenant database.
    - name: ManageMasterUserPassword
      value: {{ ManageMasterUserPassword }}
      description: Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide. Constraints: Can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.
      description: Specifies whether to manage the master user password with Amazon Web Services Secrets Manager. For more information, see Password management with Amazon Web Services Secrets Manager in the Amazon RDS User Guide. Constraints: Can't manage the master user password with Amazon Web Services Secrets Manager if MasterUserPassword is specified.
    - name: MasterUserSecretKmsKeyId
      value: "{{ MasterUserSecretKmsKeyId }}"
      description: The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
      description: The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by RDS in Amazon Web Services Secrets Manager for the DB instance. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If you don't specify MasterUserSecretKmsKeyId, then the aws/secretsmanager KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the aws/secretsmanager KMS key to encrypt the secret, and you must use a customer managed KMS key. There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_tenant_database"
    values={[
        { label: 'modify_tenant_database', value: 'modify_tenant_database' }
    ]}
>
<TabItem value="modify_tenant_database">

Modifies an existing tenant database in a DB instance. You can change the tenant database name or the master user password. This operation is supported only for RDS for Oracle CDB instances using the multi-tenant configuration.

```sql
UPDATE aws.rds.tenant_databases
SET 
-- No updatable properties
WHERE 
DBInstanceIdentifier = '{{ DBInstanceIdentifier }}' --required
AND TenantDBName = '{{ TenantDBName }}' --required
AND region = '{{ region }}' --required
AND MasterUserPassword = '{{ MasterUserPassword}}'
AND NewTenantDBName = '{{ NewTenantDBName}}'
AND ManageMasterUserPassword = {{ ManageMasterUserPassword}}
AND RotateMasterUserPassword = {{ RotateMasterUserPassword}}
AND MasterUserSecretKmsKeyId = '{{ MasterUserSecretKmsKeyId}}'
RETURNING
CharacterSetName,
DBInstanceIdentifier,
DbiResourceId,
DeletionProtection,
MasterUserSecret,
MasterUsername,
NcharCharacterSetName,
PendingModifiedValues,
Status,
TagList,
TenantDBName,
TenantDatabaseARN,
TenantDatabaseCreateTime,
TenantDatabaseResourceId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tenant_database"
    values={[
        { label: 'delete_tenant_database', value: 'delete_tenant_database' }
    ]}
>
<TabItem value="delete_tenant_database">

Deletes a tenant database from your DB instance. This command only applies to RDS for Oracle container database (CDB) instances. You can't delete a tenant database when it is the only tenant in the DB instance.

```sql
DELETE FROM aws.rds.tenant_databases
WHERE DBInstanceIdentifier = '{{ DBInstanceIdentifier }}' --required
AND TenantDBName = '{{ TenantDBName }}' --required
AND region = '{{ region }}' --required
AND SkipFinalSnapshot = '{{ SkipFinalSnapshot }}'
AND FinalDBSnapshotIdentifier = '{{ FinalDBSnapshotIdentifier }}'
;
```
</TabItem>
</Tabs>
