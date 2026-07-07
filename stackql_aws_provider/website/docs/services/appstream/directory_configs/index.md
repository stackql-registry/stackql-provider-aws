--- 
title: directory_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - directory_configs
  - appstream
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

Creates, updates, deletes, gets or lists a <code>directory_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="directory_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.directory_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_directory_configs"
    values={[
        { label: 'describe_directory_configs', value: 'describe_directory_configs' }
    ]}
>
<TabItem value="describe_directory_configs">

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
    <td><CopyableCode code="CertificateBasedAuthProperties" /></td>
    <td><code>object</code></td>
    <td>The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is Enabled . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. Enabled_no_directory_login_fallback enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the directory configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryName" /></td>
    <td><code>string</code></td>
    <td>The fully qualified name of the directory (for example, corp.example.com).</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationalUnitDistinguishedNames" /></td>
    <td><code>array</code></td>
    <td>The distinguished names of the organizational units for computer accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceAccountCredentials" /></td>
    <td><code>object</code></td>
    <td>The credentials for the service account used by the fleet or image builder to connect to the directory.</td>
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
    <td><a href="#describe_directory_configs"><CopyableCode code="describe_directory_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more specified Directory Config objects for WorkSpaces Applications, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</td>
</tr>
<tr>
    <td><a href="#create_directory_config"><CopyableCode code="create_directory_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryName"><code>DirectoryName</code></a>, <a href="#parameter-OrganizationalUnitDistinguishedNames"><code>OrganizationalUnitDistinguishedNames</code></a></td>
    <td></td>
    <td>Creates a Directory Config object in WorkSpaces Applications. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</td>
</tr>
<tr>
    <td><a href="#update_directory_config"><CopyableCode code="update_directory_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryName"><code>DirectoryName</code></a></td>
    <td></td>
    <td>Updates the specified Directory Config object in WorkSpaces Applications. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</td>
</tr>
<tr>
    <td><a href="#delete_directory_config"><CopyableCode code="delete_directory_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Directory Config object from WorkSpaces Applications. This object includes the information required to join streaming instances to an Active Directory domain.</td>
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
    defaultValue="describe_directory_configs"
    values={[
        { label: 'describe_directory_configs', value: 'describe_directory_configs' }
    ]}
>
<TabItem value="describe_directory_configs">

Retrieves a list that describes one or more specified Directory Config objects for WorkSpaces Applications, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. Although the response syntax in this topic includes the account password, this password is not returned in the actual response.

```sql
SELECT
CertificateBasedAuthProperties,
CreatedTime,
DirectoryName,
OrganizationalUnitDistinguishedNames,
ServiceAccountCredentials
FROM aws.appstream.directory_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_directory_config"
    values={[
        { label: 'create_directory_config', value: 'create_directory_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_directory_config">

Creates a Directory Config object in WorkSpaces Applications. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

```sql
INSERT INTO aws.appstream.directory_configs (
DirectoryName,
OrganizationalUnitDistinguishedNames,
ServiceAccountCredentials,
CertificateBasedAuthProperties,
region
)
SELECT 
'{{ DirectoryName }}' /* required */,
'{{ OrganizationalUnitDistinguishedNames }}' /* required */,
'{{ ServiceAccountCredentials }}',
'{{ CertificateBasedAuthProperties }}',
'{{ region }}'
RETURNING
DirectoryConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: directory_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the directory_configs resource.
    - name: DirectoryName
      value: "{{ DirectoryName }}"
      description: |
        The fully qualified name of the directory (for example, corp.example.com).
    - name: OrganizationalUnitDistinguishedNames
      value:
        - "{{ OrganizationalUnitDistinguishedNames }}"
      description: |
        The distinguished names of the organizational units for computer accounts.
    - name: ServiceAccountCredentials
      description: |
        The credentials for the service account used by the fleet or image builder to connect to the directory.
      value:
        AccountName: "{{ AccountName }}"
        AccountPassword: "{{ AccountPassword }}"
    - name: CertificateBasedAuthProperties
      description: |
        The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances. Fallback is turned on by default when certificate-based authentication is Enabled . Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. Enabled_no_directory_login_fallback enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.
      value:
        Status: "{{ Status }}"
        CertificateAuthorityArn: "{{ CertificateAuthorityArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_directory_config"
    values={[
        { label: 'update_directory_config', value: 'update_directory_config' }
    ]}
>
<TabItem value="update_directory_config">

Updates the specified Directory Config object in WorkSpaces Applications. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.

```sql
UPDATE aws.appstream.directory_configs
SET 
DirectoryName = '{{ DirectoryName }}',
OrganizationalUnitDistinguishedNames = '{{ OrganizationalUnitDistinguishedNames }}',
ServiceAccountCredentials = '{{ ServiceAccountCredentials }}',
CertificateBasedAuthProperties = '{{ CertificateBasedAuthProperties }}'
WHERE 
region = '{{ region }}' --required
AND DirectoryName = '{{ DirectoryName }}' --required
RETURNING
DirectoryConfig;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_directory_config"
    values={[
        { label: 'delete_directory_config', value: 'delete_directory_config' }
    ]}
>
<TabItem value="delete_directory_config">

Deletes the specified Directory Config object from WorkSpaces Applications. This object includes the information required to join streaming instances to an Active Directory domain.

```sql
DELETE FROM aws.appstream.directory_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
