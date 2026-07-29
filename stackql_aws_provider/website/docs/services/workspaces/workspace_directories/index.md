--- 
title: workspace_directories
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_directories
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>workspace_directories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_directories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.workspace_directories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace_directories"
    values={[
        { label: 'describe_workspace_directories', value: 'describe_workspace_directories' }
    ]}
>
<TabItem value="describe_workspace_directories">

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
    <td><CopyableCode code="active_directory_config" /></td>
    <td><code>object</code></td>
    <td>Information about the Active Directory config.</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The directory alias.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_based_auth_properties" /></td>
    <td><code>object</code></td>
    <td>The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory for WorkSpaces login.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_user_name" /></td>
    <td><code>string</code></td>
    <td>The user name for the service account.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The directory identifier. (pattern: &lt;code&gt;^(d-&#91;0-9a-f&#93;&#123;8,63&#125;$)|(wsd-&#91;0-9a-z&#93;&#123;8,63&#125;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="directory_name" /></td>
    <td><code>string</code></td>
    <td>The name of the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_type" /></td>
    <td><code>string</code></td>
    <td>The directory type. (SIMPLE_AD, AD_CONNECTOR, CUSTOMER_MANAGED, AWS_IAM_IDENTITY_CENTER)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_ip_addresses" /></td>
    <td><code>array</code></td>
    <td>The IP addresses of the DNS servers for the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_ipv_6_addresses" /></td>
    <td><code>array</code></td>
    <td>The IPv6 addresses of the DNS servers for the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_encryption_mode" /></td>
    <td><code>string</code></td>
    <td>Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode. (STANDARD_TLS, FIPS_VALIDATED)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message returned.</td>
</tr>
<tr>
    <td><CopyableCode code="idc_config" /></td>
    <td><code>object</code></td>
    <td>Specifies details about identity center configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf. (pattern: &lt;code&gt;^arn:aws&#91;a-z-&#93;&#123;0,7&#125;:&#91;A-Za-z0-9&#93;&#91;A-za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="microsoft_entra_config" /></td>
    <td><code>object</code></td>
    <td>Specifies details about Microsoft Entra configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_code" /></td>
    <td><code>string</code></td>
    <td>The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="saml_properties" /></td>
    <td><code>object</code></td>
    <td>Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="selfservice_permissions" /></td>
    <td><code>object</code></td>
    <td>The default self-service permissions for WorkSpaces in the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the directory's registration with Amazon WorkSpaces. After a directory is deregistered, the DEREGISTERED state is returned very briefly before the directory metadata is cleaned up, so this state is rarely returned. To confirm that a directory is deregistered, check for the directory ID by using DescribeWorkspaceDirectories. If the directory ID isn't returned, then the directory has been successfully deregistered. (REGISTERING, REGISTERED, DEREGISTERING, DEREGISTERED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="streaming_properties" /></td>
    <td><code>object</code></td>
    <td>The streaming properties to configure.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>array</code></td>
    <td>The identifiers of the subnets used with the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="tenancy" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the directory is dedicated or shared. To use Bring Your Own License (BYOL), this value must be set to DEDICATED. For more information, see Bring Your Own Windows Desktop Images. (DEDICATED, SHARED)</td>
</tr>
<tr>
    <td><CopyableCode code="user_identity_type" /></td>
    <td><code>string</code></td>
    <td>Indicates the identity type of the specifired user. (CUSTOMER_MANAGED, AWS_DIRECTORY_SERVICE, AWS_IAM_IDENTITY_CENTER)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_access_properties" /></td>
    <td><code>object</code></td>
    <td>The devices and operating systems that users can use to access WorkSpaces.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_creation_properties" /></td>
    <td><code>object</code></td>
    <td>The default creation properties for all WorkSpaces in the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_directory_description" /></td>
    <td><code>string</code></td>
    <td>The description of the WorkSpace directory (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9_&#93;)&#91;\\a-zA-Z0-9_@#%*+=:?./!\s-&#93;&#123;1,255&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_directory_name" /></td>
    <td><code>string</code></td>
    <td>The name fo the WorkSpace directory. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_.\s-&#93;&#123;1,64&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_security_group_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the security group that is assigned to new WorkSpaces. (pattern: &lt;code&gt;^(sg-(&#91;0-9a-f&#93;&#123;8&#125;|&#91;0-9a-f&#93;&#123;17&#125;))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the directory's WorkSpace type is personal or pools. (PERSONAL, POOLS)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_group_ids" /></td>
    <td><code>array</code></td>
    <td>The identifiers of the IP access control groups associated with the directory.</td>
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
    <td><a href="#describe_workspace_directories"><CopyableCode code="describe_workspace_directories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the available directories that are registered with Amazon WorkSpaces.</td>
</tr>
<tr>
    <td><a href="#register_workspace_directory"><CopyableCode code="register_workspace_directory" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see Creating the workspaces_DefaultRole Role.</td>
</tr>
<tr>
    <td><a href="#deregister_workspace_directory"><CopyableCode code="deregister_workspace_directory" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory. Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the Directory Service pricing terms. To delete empty directories, see Delete the Directory for Your WorkSpaces. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</td>
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
    defaultValue="describe_workspace_directories"
    values={[
        { label: 'describe_workspace_directories', value: 'describe_workspace_directories' }
    ]}
>
<TabItem value="describe_workspace_directories">

Describes the available directories that are registered with Amazon WorkSpaces.

```sql
SELECT
active_directory_config,
alias,
certificate_based_auth_properties,
customer_user_name,
directory_id,
directory_name,
directory_type,
dns_ip_addresses,
dns_ipv_6_addresses,
endpoint_encryption_mode,
error_message,
idc_config,
iam_role_id,
microsoft_entra_config,
registration_code,
saml_properties,
selfservice_permissions,
state,
streaming_properties,
subnet_ids,
tenancy,
user_identity_type,
workspace_access_properties,
workspace_creation_properties,
workspace_directory_description,
workspace_directory_name,
workspace_security_group_id,
workspace_type,
ip_group_ids
FROM aws.workspaces.workspace_directories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_workspace_directory"
    values={[
        { label: 'register_workspace_directory', value: 'register_workspace_directory' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_workspace_directory">

Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see Creating the workspaces_DefaultRole Role.

```sql
INSERT INTO aws.workspaces.workspace_directories (
DirectoryId,
SubnetIds,
EnableSelfService,
Tenancy,
Tags,
WorkspaceDirectoryName,
WorkspaceDirectoryDescription,
UserIdentityType,
IdcInstanceArn,
MicrosoftEntraConfig,
WorkspaceType,
ActiveDirectoryConfig,
region
)
SELECT 
'{{ DirectoryId }}',
'{{ SubnetIds }}',
{{ EnableSelfService }},
'{{ Tenancy }}',
'{{ Tags }}',
'{{ WorkspaceDirectoryName }}',
'{{ WorkspaceDirectoryDescription }}',
'{{ UserIdentityType }}',
'{{ IdcInstanceArn }}',
'{{ MicrosoftEntraConfig }}',
'{{ WorkspaceType }}',
'{{ ActiveDirectoryConfig }}',
'{{ region }}'
RETURNING
directory_id,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspace_directories
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspace_directories resource.
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: |
        The identifier of the directory. You cannot register a directory if it does not have a status of Active. If the directory does not have a status of Active, you will receive an InvalidResourceStateException error. If you have already registered the maximum number of directories that you can register with Amazon WorkSpaces, you will receive a ResourceLimitExceededException error. Deregister directories that you are not using for WorkSpaces, and try again.
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the subnets are in supported Availability Zones. The subnets must also be in separate Availability Zones. If these conditions are not met, you will receive an OperationNotSupportedException error.
    - name: EnableSelfService
      value: {{ EnableSelfService }}
      description: |
        Indicates whether self-service capabilities are enabled or disabled.
    - name: Tenancy
      value: "{{ Tenancy }}"
      description: |
        Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own License (BYOL) images, this value must be set to DEDICATED and your Amazon Web Services account must be enabled for BYOL. If your account has not been enabled for BYOL, you will receive an InvalidParameterValuesException error. For more information about BYOL images, see Bring Your Own Windows Desktop Images.
      valid_values: ['DEDICATED', 'SHARED']
    - name: Tags
      description: |
        The tags associated with the directory.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: WorkspaceDirectoryName
      value: "{{ WorkspaceDirectoryName }}"
      description: |
        The name of the directory to register.
    - name: WorkspaceDirectoryDescription
      value: "{{ WorkspaceDirectoryDescription }}"
      description: |
        Description of the directory to register.
    - name: UserIdentityType
      value: "{{ UserIdentityType }}"
      description: |
        The type of identity management the user is using.
      valid_values: ['CUSTOMER_MANAGED', 'AWS_DIRECTORY_SERVICE', 'AWS_IAM_IDENTITY_CENTER']
    - name: IdcInstanceArn
      value: "{{ IdcInstanceArn }}"
      description: |
        The Amazon Resource Name (ARN) of the identity center instance.
    - name: MicrosoftEntraConfig
      description: |
        The details about Microsoft Entra config.
      value:
        TenantId: "{{ TenantId }}"
        ApplicationConfigSecretArn: "{{ ApplicationConfigSecretArn }}"
    - name: WorkspaceType
      value: "{{ WorkspaceType }}"
      description: |
        Indicates whether the directory's WorkSpace type is personal or pools.
      valid_values: ['PERSONAL', 'POOLS']
    - name: ActiveDirectoryConfig
      description: |
        The active directory config of the directory.
      value:
        DomainName: "{{ DomainName }}"
        ServiceAccountSecretArn: "{{ ServiceAccountSecretArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_workspace_directory"
    values={[
        { label: 'deregister_workspace_directory', value: 'deregister_workspace_directory' }
    ]}
>
<TabItem value="deregister_workspace_directory">

Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory. Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the Directory Service pricing terms. To delete empty directories, see Delete the Directory for Your WorkSpaces. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.

```sql
DELETE FROM aws.workspaces.workspace_directories
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
