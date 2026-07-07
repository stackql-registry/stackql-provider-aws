--- 
title: service_specific_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - service_specific_credentials
  - iam
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

Creates, updates, deletes, gets or lists a <code>service_specific_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_specific_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.service_specific_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_specific_credentials"
    values={[
        { label: 'list_service_specific_credentials', value: 'list_service_specific_credentials' }
    ]}
>
<TabItem value="list_service_specific_credentials">

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
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the service-specific credential were created.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationDate" /></td>
    <td><code>string</code></td>
    <td>The date and time when the service specific credential expires. This field is only present for Bedrock API keys and CloudWatch Logs API keys that were created with an expiration period.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceCredentialAlias" /></td>
    <td><code>string</code></td>
    <td>For Bedrock API keys and CloudWatch Logs API keys, this is the public portion of the credential that includes the IAM user name and a suffix containing version and creation information.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service associated with the service-specific credential.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceSpecificCredentialId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the service-specific credential.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUserName" /></td>
    <td><code>string</code></td>
    <td>The generated user name for the service-specific credential.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the service-specific credential. Active means that the key is valid for API calls, while Inactive means it is not.</td>
</tr>
<tr>
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM user associated with the service-specific credential.</td>
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
    <td><a href="#list_service_specific_credentials"><CopyableCode code="list_service_specific_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-ServiceName"><code>ServiceName</code></a>, <a href="#parameter-AllUsers"><code>AllUsers</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see Set up service-specific credentials in the CodeCommit User Guide.</td>
</tr>
<tr>
    <td><a href="#create_service_specific_credential"><CopyableCode code="create_service_specific_credential" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-ServiceName"><code>ServiceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CredentialAgeDays"><code>CredentialAgeDays</code></a></td>
    <td>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. You can have a maximum of two sets of service-specific credentials for each supported service per user. You can create service-specific credentials for Amazon Bedrock, Amazon CloudWatch Logs, CodeCommit and Amazon Keyspaces (for Apache Cassandra). You can reset the password to a new service-generated value by calling ResetServiceSpecificCredential. For more information about service-specific credentials, see Service-specific credentials for IAM users in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#update_service_specific_credential"><CopyableCode code="update_service_specific_credential" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ServiceSpecificCredentialId"><code>ServiceSpecificCredentialId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>Sets the status of a service-specific credential to Active or Inactive. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.</td>
</tr>
<tr>
    <td><a href="#delete_service_specific_credential"><CopyableCode code="delete_service_specific_credential" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ServiceSpecificCredentialId"><code>ServiceSpecificCredentialId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a></td>
    <td>Deletes the specified service-specific credential.</td>
</tr>
<tr>
    <td><a href="#reset_service_specific_credential"><CopyableCode code="reset_service_specific_credential" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ServiceSpecificCredentialId"><code>ServiceSpecificCredentialId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a></td>
    <td>Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.</td>
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
<tr id="parameter-ServiceName">
    <td><CopyableCode code="ServiceName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services service that is to be associated with the credentials. The service you specify here is the only service that can be accessed using these credentials.</td>
</tr>
<tr id="parameter-ServiceSpecificCredentialId">
    <td><CopyableCode code="ServiceSpecificCredentialId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the service-specific credential. This parameter allows (through its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM user that is to be associated with the credentials. The new service-specific credentials have the same permissions as the associated user except that they can be used only to access the specified service. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllUsers">
    <td><CopyableCode code="AllUsers" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating whether to list service specific credentials for all users. This parameter cannot be specified together with UserName. When true, returns all credentials associated with the specified service.</td>
</tr>
<tr id="parameter-CredentialAgeDays">
    <td><CopyableCode code="CredentialAgeDays" /></td>
    <td><code>integer</code></td>
    <td>The number of days until the service specific credential expires. This field is only valid for Bedrock and CloudWatch Logs API keys and must be a positive integer. When not specified, the credential will not expire.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker from the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true.</td>
</tr>
<tr id="parameter-ServiceName">
    <td><CopyableCode code="ServiceName" /></td>
    <td><code>string</code></td>
    <td>Filters the returned results to only those for the specified Amazon Web Services service. If not specified, then Amazon Web Services returns service-specific credentials for all services.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status to be assigned to the service-specific credential.</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM user associated with the service-specific credential. If this value is not specified, then the operation assumes the user whose credentials are used to call the operation. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_service_specific_credentials"
    values={[
        { label: 'list_service_specific_credentials', value: 'list_service_specific_credentials' }
    ]}
>
<TabItem value="list_service_specific_credentials">

Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an Amazon Web Services service, see Set up service-specific credentials in the CodeCommit User Guide.

```sql
SELECT
CreateDate,
ExpirationDate,
ServiceCredentialAlias,
ServiceName,
ServiceSpecificCredentialId,
ServiceUserName,
Status,
UserName
FROM aws.iam.service_specific_credentials
WHERE region = '{{ region }}' -- required
AND UserName = '{{ UserName }}'
AND ServiceName = '{{ ServiceName }}'
AND AllUsers = '{{ AllUsers }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_specific_credential"
    values={[
        { label: 'create_service_specific_credential', value: 'create_service_specific_credential' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_specific_credential">

Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. You can have a maximum of two sets of service-specific credentials for each supported service per user. You can create service-specific credentials for Amazon Bedrock, Amazon CloudWatch Logs, CodeCommit and Amazon Keyspaces (for Apache Cassandra). You can reset the password to a new service-generated value by calling ResetServiceSpecificCredential. For more information about service-specific credentials, see Service-specific credentials for IAM users in the IAM User Guide.

```sql
INSERT INTO aws.iam.service_specific_credentials (
UserName,
ServiceName,
region,
CredentialAgeDays
)
SELECT 
'{{ UserName }}',
'{{ ServiceName }}',
'{{ region }}',
'{{ CredentialAgeDays }}'
RETURNING
CreateDate,
ExpirationDate,
ServiceCredentialAlias,
ServiceCredentialSecret,
ServiceName,
ServicePassword,
ServiceSpecificCredentialId,
ServiceUserName,
Status,
UserName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_specific_credentials
  props:
    - name: UserName
      value: "{{ UserName }}"
      description: Required parameter for the service_specific_credentials resource.
    - name: ServiceName
      value: "{{ ServiceName }}"
      description: Required parameter for the service_specific_credentials resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_specific_credentials resource.
    - name: CredentialAgeDays
      value: {{ CredentialAgeDays }}
      description: The number of days until the service specific credential expires. This field is only valid for Bedrock and CloudWatch Logs API keys and must be a positive integer. When not specified, the credential will not expire.
      description: The number of days until the service specific credential expires. This field is only valid for Bedrock and CloudWatch Logs API keys and must be a positive integer. When not specified, the credential will not expire.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_specific_credential"
    values={[
        { label: 'update_service_specific_credential', value: 'update_service_specific_credential' }
    ]}
>
<TabItem value="update_service_specific_credential">

Sets the status of a service-specific credential to Active or Inactive. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.

```sql
UPDATE aws.iam.service_specific_credentials
SET 
-- No updatable properties
WHERE 
ServiceSpecificCredentialId = '{{ ServiceSpecificCredentialId }}' --required
AND region = '{{ region }}' --required
AND UserName = '{{ UserName}}'
AND Status = '{{ Status}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_specific_credential"
    values={[
        { label: 'delete_service_specific_credential', value: 'delete_service_specific_credential' }
    ]}
>
<TabItem value="delete_service_specific_credential">

Deletes the specified service-specific credential.

```sql
DELETE FROM aws.iam.service_specific_credentials
WHERE ServiceSpecificCredentialId = '{{ ServiceSpecificCredentialId }}' --required
AND region = '{{ region }}' --required
AND UserName = '{{ UserName }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_service_specific_credential"
    values={[
        { label: 'reset_service_specific_credential', value: 'reset_service_specific_credential' }
    ]}
>
<TabItem value="reset_service_specific_credential">

Resets the password for a service-specific credential. The new password is Amazon Web Services generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.

```sql
EXEC aws.iam.service_specific_credentials.reset_service_specific_credential 
@ServiceSpecificCredentialId='{{ ServiceSpecificCredentialId }}' --required, 
@region='{{ region }}' --required, 
@UserName='{{ UserName }}'
;
```
</TabItem>
</Tabs>
