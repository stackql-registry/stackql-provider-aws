--- 
title: data_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - data_providers
  - dms
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

Creates, updates, deletes, gets or lists a <code>data_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.data_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_providers"
    values={[
        { label: 'describe_data_providers', value: 'describe_data_providers' }
    ]}
>
<TabItem value="describe_data_providers">

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
    <td><CopyableCode code="data_providers" /></td>
    <td><code>array</code></td>
    <td>A description of data providers.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.</td>
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
    <td><a href="#describe_data_providers"><CopyableCode code="describe_data_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of data providers for your account in the current region. Required permissions: dms:ListDataProviders. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#create_data_provider"><CopyableCode code="create_data_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-Settings"><code>Settings</code></a></td>
    <td></td>
    <td>Creates a data provider using the provided settings. A data provider stores a data store type and location information about your database. Required permissions: dms:CreateDataProvider. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#modify_data_provider"><CopyableCode code="modify_data_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataProviderIdentifier"><code>DataProviderIdentifier</code></a></td>
    <td></td>
    <td>Modifies the specified data provider using the provided settings. Required permissions: dms:UpdateDataProvider. For more information, see Actions, resources, and condition keys for Database Migration Service. You must remove the data provider from all migration projects before you can modify it.</td>
</tr>
<tr>
    <td><a href="#delete_data_provider"><CopyableCode code="delete_data_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified data provider. Required permissions: dms:DeleteDataProvider. For more information, see Actions, resources, and condition keys for Database Migration Service. All migration projects associated with the data provider must be deleted or modified before you can delete the data provider.</td>
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
    defaultValue="describe_data_providers"
    values={[
        { label: 'describe_data_providers', value: 'describe_data_providers' }
    ]}
>
<TabItem value="describe_data_providers">

Returns a paginated list of data providers for your account in the current region. Required permissions: dms:ListDataProviders. For more information, see Actions, resources, and condition keys for Database Migration Service.

```sql
SELECT
data_providers,
marker
FROM aws.dms.data_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_provider"
    values={[
        { label: 'create_data_provider', value: 'create_data_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_provider">

Creates a data provider using the provided settings. A data provider stores a data store type and location information about your database. Required permissions: dms:CreateDataProvider. For more information, see Actions, resources, and condition keys for Database Migration Service.

```sql
INSERT INTO aws.dms.data_providers (
DataProviderName,
Description,
Engine,
Virtual,
Settings,
Tags,
region
)
SELECT 
'{{ DataProviderName }}',
'{{ Description }}',
'{{ Engine }}' /* required */,
{{ Virtual }},
'{{ Settings }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
data_provider
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_providers resource.
    - name: DataProviderName
      value: "{{ DataProviderName }}"
      description: |
        A user-friendly name for the data provider.
    - name: Description
      value: "{{ Description }}"
      description: |
        A user-friendly description of the data provider.
    - name: Engine
      value: "{{ Engine }}"
      description: |
        The type of database engine for the data provider. Valid values: aurora, aurora-postgresql, db2, db2-zos, docdb, mariadb, mongodb, mysql, oracle, postgres, redshift, sqlserver, and sybase. A value of aurora represents Amazon Aurora MySQL-Compatible Edition.
    - name: Virtual
      value: {{ Virtual }}
      description: |
        Indicates whether the data provider is virtual.
    - name: Settings
      description: |
        The settings in JSON format for a data provider.
      value:
        RedshiftSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          DatabaseName: "{{ DatabaseName }}"
          S3Path: "{{ S3Path }}"
          S3AccessRoleArn: "{{ S3AccessRoleArn }}"
        PostgreSqlSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          DatabaseName: "{{ DatabaseName }}"
          SslMode: "{{ SslMode }}"
          CertificateArn: "{{ CertificateArn }}"
          S3Path: "{{ S3Path }}"
          S3AccessRoleArn: "{{ S3AccessRoleArn }}"
        MySqlSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          SslMode: "{{ SslMode }}"
          CertificateArn: "{{ CertificateArn }}"
          S3Path: "{{ S3Path }}"
          S3AccessRoleArn: "{{ S3AccessRoleArn }}"
        OracleSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          DatabaseName: "{{ DatabaseName }}"
          SslMode: "{{ SslMode }}"
          CertificateArn: "{{ CertificateArn }}"
          AsmServer: "{{ AsmServer }}"
          SecretsManagerOracleAsmSecretId: "{{ SecretsManagerOracleAsmSecretId }}"
          SecretsManagerOracleAsmAccessRoleArn: "{{ SecretsManagerOracleAsmAccessRoleArn }}"
          SecretsManagerSecurityDbEncryptionSecretId: "{{ SecretsManagerSecurityDbEncryptionSecretId }}"
          SecretsManagerSecurityDbEncryptionAccessRoleArn: "{{ SecretsManagerSecurityDbEncryptionAccessRoleArn }}"
          S3Path: "{{ S3Path }}"
          S3AccessRoleArn: "{{ S3AccessRoleArn }}"
        SybaseAseSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          DatabaseName: "{{ DatabaseName }}"
          SslMode: "{{ SslMode }}"
          EncryptPassword: {{ EncryptPassword }}
          CertificateArn: "{{ CertificateArn }}"
        MicrosoftSqlServerSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          DatabaseName: "{{ DatabaseName }}"
          SslMode: "{{ SslMode }}"
          CertificateArn: "{{ CertificateArn }}"
          S3Path: "{{ S3Path }}"
          S3AccessRoleArn: "{{ S3AccessRoleArn }}"
        DocDbSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          DatabaseName: "{{ DatabaseName }}"
          SslMode: "{{ SslMode }}"
          CertificateArn: "{{ CertificateArn }}"
        MariaDbSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          SslMode: "{{ SslMode }}"
          CertificateArn: "{{ CertificateArn }}"
          S3Path: "{{ S3Path }}"
          S3AccessRoleArn: "{{ S3AccessRoleArn }}"
        IbmDb2LuwSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          DatabaseName: "{{ DatabaseName }}"
          SslMode: "{{ SslMode }}"
          CertificateArn: "{{ CertificateArn }}"
          EncryptionAlgorithm: {{ EncryptionAlgorithm }}
          SecurityMechanism: {{ SecurityMechanism }}
          S3Path: "{{ S3Path }}"
          S3AccessRoleArn: "{{ S3AccessRoleArn }}"
        IbmDb2zOsSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          DatabaseName: "{{ DatabaseName }}"
          SslMode: "{{ SslMode }}"
          CertificateArn: "{{ CertificateArn }}"
          S3Path: "{{ S3Path }}"
          S3AccessRoleArn: "{{ S3AccessRoleArn }}"
        MongoDbSettings:
          ServerName: "{{ ServerName }}"
          Port: {{ Port }}
          DatabaseName: "{{ DatabaseName }}"
          SslMode: "{{ SslMode }}"
          CertificateArn: "{{ CertificateArn }}"
          AuthType: "{{ AuthType }}"
          AuthSource: "{{ AuthSource }}"
          AuthMechanism: "{{ AuthMechanism }}"
    - name: Tags
      description: |
        One or more tags to be assigned to the data provider.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          ResourceArn: "{{ ResourceArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_data_provider"
    values={[
        { label: 'modify_data_provider', value: 'modify_data_provider' }
    ]}
>
<TabItem value="modify_data_provider">

Modifies the specified data provider using the provided settings. Required permissions: dms:UpdateDataProvider. For more information, see Actions, resources, and condition keys for Database Migration Service. You must remove the data provider from all migration projects before you can modify it.

```sql
UPDATE aws.dms.data_providers
SET 
DataProviderIdentifier = '{{ DataProviderIdentifier }}',
DataProviderName = '{{ DataProviderName }}',
Description = '{{ Description }}',
Engine = '{{ Engine }}',
Virtual = {{ Virtual }},
ExactSettings = {{ ExactSettings }},
Settings = '{{ Settings }}'
WHERE 
region = '{{ region }}' --required
AND DataProviderIdentifier = '{{ DataProviderIdentifier }}' --required
RETURNING
data_provider;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_provider"
    values={[
        { label: 'delete_data_provider', value: 'delete_data_provider' }
    ]}
>
<TabItem value="delete_data_provider">

Deletes the specified data provider. Required permissions: dms:DeleteDataProvider. For more information, see Actions, resources, and condition keys for Database Migration Service. All migration projects associated with the data provider must be deleted or modified before you can delete the data provider.

```sql
DELETE FROM aws.dms.data_providers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
