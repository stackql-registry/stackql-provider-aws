--- 
title: studios
hide_title: false
hide_table_of_contents: false
keywords:
  - studios
  - emr
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

Creates, updates, deletes, gets or lists a <code>studios</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="studios" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.studios" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_studio"
    values={[
        { label: 'describe_studio', value: 'describe_studio' },
        { label: 'list_studios', value: 'list_studios' }
    ]}
>
<TabItem value="describe_studio">

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
    <td><CopyableCode code="AuthMode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the Amazon EMR Studio authenticates users with IAM or IAM Identity Center. (SSO, IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the Amazon EMR Studio was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultS3Location" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The detailed description of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The KMS key identifier (ARN) used to encrypt Amazon EMR Studio workspace and notebook files when backed up to Amazon S3. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EngineSecurityGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Engine security group associated with the Amazon EMR Studio. The Engine security group allows inbound network traffic from resources in the Workspace security group. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdcInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM Identity Center instance the Studio application belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="IdcUserAssignment" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the Studio has REQUIRED or OPTIONAL IAM Identity Center user assignment. If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio. (REQUIRED, OPTIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="IdpAuthUrl" /></td>
    <td><code>string</code></td>
    <td>Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdpRelayStateParameterName" /></td>
    <td><code>string</code></td>
    <td>The name of your identity provider's RelayState parameter. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceRole" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM role assumed by the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StudioArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StudioId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetIds" /></td>
    <td><code>array</code></td>
    <td>The list of IDs of the subnets associated with the Amazon EMR Studio.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with the Amazon EMR Studio.</td>
</tr>
<tr>
    <td><CopyableCode code="TrustedIdentityPropagationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Studio has Trusted identity propagation enabled. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="Url" /></td>
    <td><code>string</code></td>
    <td>The unique access URL of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UserRole" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM role assumed by users logged in to the Amazon EMR Studio. A Studio only requires a UserRole when you use IAM authentication. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC associated with the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkspaceSecurityGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Workspace security group associated with the Amazon EMR Studio. The Workspace security group allows outbound network traffic to resources in the Engine security group and to the internet. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_studios">

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
    <td><CopyableCode code="AuthMode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the Studio authenticates users using IAM or IAM Identity Center. (SSO, IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the Amazon EMR Studio was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The detailed description of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StudioId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Url" /></td>
    <td><code>string</code></td>
    <td>The unique access URL of the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Virtual Private Cloud (Amazon VPC) associated with the Amazon EMR Studio. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_studio"><CopyableCode code="describe_studio" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.</td>
</tr>
<tr>
    <td><a href="#list_studios"><CopyableCode code="list_studios" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.</td>
</tr>
<tr>
    <td><a href="#create_studio"><CopyableCode code="create_studio" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AuthMode"><code>AuthMode</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-ServiceRole"><code>ServiceRole</code></a>, <a href="#parameter-WorkspaceSecurityGroupId"><code>WorkspaceSecurityGroupId</code></a>, <a href="#parameter-EngineSecurityGroupId"><code>EngineSecurityGroupId</code></a>, <a href="#parameter-DefaultS3Location"><code>DefaultS3Location</code></a></td>
    <td></td>
    <td>Creates a new Amazon EMR Studio.</td>
</tr>
<tr>
    <td><a href="#update_studio"><CopyableCode code="update_studio" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StudioId"><code>StudioId</code></a></td>
    <td></td>
    <td>Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.</td>
</tr>
<tr>
    <td><a href="#delete_studio"><CopyableCode code="delete_studio" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an Amazon EMR Studio from the Studio metadata store.</td>
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
    defaultValue="describe_studio"
    values={[
        { label: 'describe_studio', value: 'describe_studio' },
        { label: 'list_studios', value: 'list_studios' }
    ]}
>
<TabItem value="describe_studio">

Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.

```sql
SELECT
AuthMode,
CreationTime,
DefaultS3Location,
Description,
EncryptionKeyArn,
EngineSecurityGroupId,
IdcInstanceArn,
IdcUserAssignment,
IdpAuthUrl,
IdpRelayStateParameterName,
Name,
ServiceRole,
StudioArn,
StudioId,
SubnetIds,
Tags,
TrustedIdentityPropagationEnabled,
Url,
UserRole,
VpcId,
WorkspaceSecurityGroupId
FROM aws.emr.studios
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_studios">

Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.

```sql
SELECT
AuthMode,
CreationTime,
Description,
Name,
StudioId,
Url,
VpcId
FROM aws.emr.studios
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_studio"
    values={[
        { label: 'create_studio', value: 'create_studio' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_studio">

Creates a new Amazon EMR Studio.

```sql
INSERT INTO aws.emr.studios (
Name,
Description,
AuthMode,
VpcId,
SubnetIds,
ServiceRole,
UserRole,
WorkspaceSecurityGroupId,
EngineSecurityGroupId,
DefaultS3Location,
IdpAuthUrl,
IdpRelayStateParameterName,
Tags,
TrustedIdentityPropagationEnabled,
IdcUserAssignment,
IdcInstanceArn,
EncryptionKeyArn,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ AuthMode }}' /* required */,
'{{ VpcId }}' /* required */,
'{{ SubnetIds }}' /* required */,
'{{ ServiceRole }}' /* required */,
'{{ UserRole }}',
'{{ WorkspaceSecurityGroupId }}' /* required */,
'{{ EngineSecurityGroupId }}' /* required */,
'{{ DefaultS3Location }}' /* required */,
'{{ IdpAuthUrl }}',
'{{ IdpRelayStateParameterName }}',
'{{ Tags }}',
{{ TrustedIdentityPropagationEnabled }},
'{{ IdcUserAssignment }}',
'{{ IdcInstanceArn }}',
'{{ EncryptionKeyArn }}',
'{{ region }}'
RETURNING
StudioId,
Url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: studios
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the studios resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A descriptive name for the Amazon EMR Studio.
    - name: Description
      value: "{{ Description }}"
      description: |
        A detailed description of the Amazon EMR Studio.
    - name: AuthMode
      value: "{{ AuthMode }}"
      description: |
        Specifies whether the Studio authenticates users using IAM or IAM Identity Center.
      valid_values: ['SSO', 'IAM']
    - name: VpcId
      value: "{{ VpcId }}"
      description: |
        The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.
    - name: ServiceRole
      value: "{{ ServiceRole }}"
      description: |
        The IAM role that the Amazon EMR Studio assumes. The service role provides a way for Amazon EMR Studio to interoperate with other Amazon Web Services services.
    - name: UserRole
      value: "{{ UserRole }}"
      description: |
        The IAM user role that users and groups assume when logged in to an Amazon EMR Studio. Only specify a UserRole when you use IAM Identity Center authentication. The permissions attached to the UserRole can be scoped down for each user or group using session policies.
    - name: WorkspaceSecurityGroupId
      value: "{{ WorkspaceSecurityGroupId }}"
      description: |
        The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.
    - name: EngineSecurityGroupId
      value: "{{ EngineSecurityGroupId }}"
      description: |
        The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.
    - name: DefaultS3Location
      value: "{{ DefaultS3Location }}"
      description: |
        The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files.
    - name: IdpAuthUrl
      value: "{{ IdpAuthUrl }}"
      description: |
        The authentication endpoint of your identity provider (IdP). Specify this value when you use IAM authentication and want to let federated users log in to a Studio with the Studio URL and credentials from your IdP. Amazon EMR Studio redirects users to this endpoint to enter credentials.
    - name: IdpRelayStateParameterName
      value: "{{ IdpRelayStateParameterName }}"
      description: |
        The name that your identity provider (IdP) uses for its RelayState parameter. For example, RelayState or TargetSource. Specify this value when you use IAM authentication and want to let federated users log in to a Studio using the Studio URL. The RelayState parameter differs by IdP.
    - name: Tags
      description: |
        A list of tags to associate with the Amazon EMR Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: TrustedIdentityPropagationEnabled
      value: {{ TrustedIdentityPropagationEnabled }}
      description: |
        A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.
    - name: IdcUserAssignment
      value: "{{ IdcUserAssignment }}"
      description: |
        Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.
      valid_values: ['REQUIRED', 'OPTIONAL']
    - name: IdcInstanceArn
      value: "{{ IdcInstanceArn }}"
      description: |
        The ARN of the IAM Identity Center instance to create the Studio application.
    - name: EncryptionKeyArn
      value: "{{ EncryptionKeyArn }}"
      description: |
        The KMS key identifier (ARN) used to encrypt Amazon EMR Studio workspace and notebook files when backed up to Amazon S3.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_studio"
    values={[
        { label: 'update_studio', value: 'update_studio' }
    ]}
>
<TabItem value="update_studio">

Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.

```sql
UPDATE aws.emr.studios
SET 
StudioId = '{{ StudioId }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
SubnetIds = '{{ SubnetIds }}',
DefaultS3Location = '{{ DefaultS3Location }}',
EncryptionKeyArn = '{{ EncryptionKeyArn }}'
WHERE 
region = '{{ region }}' --required
AND StudioId = '{{ StudioId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_studio"
    values={[
        { label: 'delete_studio', value: 'delete_studio' }
    ]}
>
<TabItem value="delete_studio">

Removes an Amazon EMR Studio from the Studio metadata store.

```sql
DELETE FROM aws.emr.studios
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
