--- 
title: directories
hide_title: false
hide_table_of_contents: false
keywords:
  - directories
  - ds
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

Creates, updates, deletes, gets or lists a <code>directories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="directories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.directories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_directories"
    values={[
        { label: 'describe_directories', value: 'describe_directories' }
    ]}
>
<TabItem value="describe_directories">

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
    <td><CopyableCode code="access_url" /></td>
    <td><code>string</code></td>
    <td>The access URL for the directory, such as http:​//<code>&lt;alias&gt;</code>.awsapps.com. If no alias exists, <code>&lt;alias&gt;</code> is the directory identifier, such as d-XXXXXXXXXX.</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias for the directory. If no alias exists, the alias is the directory identifier, such as d-XXXXXXXXXX. (pattern: &lt;code&gt;^(?!D-|d-)(&#91;\da-zA-Z&#93;+)(&#91;-&#93;*&#91;\da-zA-Z&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connect_settings" /></td>
    <td><code>object</code></td>
    <td>DirectoryConnectSettingsDescription object that contains additional information about an AD Connector directory. Present only for AD Connector directories.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the directory. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9_&#93;)&#91;\\a-zA-Z0-9_@#%*+=:?./!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desired_number_of_domain_controllers" /></td>
    <td><code>integer</code></td>
    <td>The desired number of domain controllers in the directory if the directory is Microsoft AD.</td>
</tr>
<tr>
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The directory identifier. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_ip_addrs" /></td>
    <td><code>array</code></td>
    <td>The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers. For an AD Connector directory, these are the IP addresses of self-managed directory to which the AD Connector is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_ipv_6_addrs" /></td>
    <td><code>array</code></td>
    <td>The IPv6 addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD directory, these are the IPv6 addresses of the Simple AD or Microsoft AD directory servers. For an AD Connector directory, these are the IPv6 addresses of the DNS servers or domain controllers in your self-managed directory to which the AD Connector is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="edition" /></td>
    <td><code>string</code></td>
    <td>The edition associated with this directory. (Enterprise, Standard, Hybrid)</td>
</tr>
<tr>
    <td><CopyableCode code="hybrid_settings" /></td>
    <td><code>object</code></td>
    <td>Contains information about the hybrid directory configuration for the directory, including Amazon Web Services System Manager managed node identifiers and DNS IPs.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the directory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The fully qualified name of the directory. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9&#93;+&#91;\\.-&#93;)+(&#91;a-zA-Z0-9&#93;)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>The network type of the directory. (Dual-stack, IPv4, IPv6)</td>
</tr>
<tr>
    <td><CopyableCode code="os_version" /></td>
    <td><code>string</code></td>
    <td>The operating system (OS) version of the directory. (SERVER_2012, SERVER_2019)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_directory_description" /></td>
    <td><code>object</code></td>
    <td>Describes the Managed Microsoft AD directory in the directory owner account.</td>
</tr>
<tr>
    <td><CopyableCode code="radius_settings" /></td>
    <td><code>object</code></td>
    <td>Information about the RadiusSettings object configured for this directory.</td>
</tr>
<tr>
    <td><CopyableCode code="radius_status" /></td>
    <td><code>string</code></td>
    <td>The status of the RADIUS MFA server connection. (Creating, Completed, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="regions_info" /></td>
    <td><code>object</code></td>
    <td>Lists the Regions where the directory has replicated.</td>
</tr>
<tr>
    <td><CopyableCode code="share_method" /></td>
    <td><code>string</code></td>
    <td>The method used when sharing a directory to determine whether the directory should be shared within your Amazon Web Services organization (ORGANIZATIONS) or with any Amazon Web Services account by sending a shared directory request (HANDSHAKE). (ORGANIZATIONS, HANDSHAKE)</td>
</tr>
<tr>
    <td><CopyableCode code="share_notes" /></td>
    <td><code>string</code></td>
    <td>A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="share_status" /></td>
    <td><code>string</code></td>
    <td>Current directory status of the shared Managed Microsoft AD directory. (Shared, PendingAcceptance, Rejected, Rejecting, RejectFailed, Sharing, ShareFailed, Deleted, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="short_name" /></td>
    <td><code>string</code></td>
    <td>The short name of the directory. (pattern: &lt;code&gt;^&#91;^\\/:*?"&lt;&gt;|.&#93;+&#91;^\\/:*?"&lt;&gt;|&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>The directory size. (Small, Large)</td>
</tr>
<tr>
    <td><CopyableCode code="sso_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether single sign-on is enabled for the directory. For more information, see EnableSso and DisableSso.</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current stage of the directory. (Requested, Creating, Created, Active, Inoperable, Impaired, Restoring, RestoreFailed, Deleting, Deleted, Failed, Updating)</td>
</tr>
<tr>
    <td><CopyableCode code="stage_last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the stage was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="stage_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the directory stage.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The directory type. (SimpleAD, ADConnector, MicrosoftAD, SharedMicrosoftAD)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_settings" /></td>
    <td><code>object</code></td>
    <td>A DirectoryVpcSettingsDescription object that contains additional information about a directory. Present only for Simple AD and Managed Microsoft AD directories.</td>
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
    <td><a href="#describe_directories"><CopyableCode code="describe_directories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains information about the directories that belong to this account. You can retrieve information about specific directories by passing the directory identifiers in the DirectoryIds parameter. Otherwise, all directories that belong to the current account are returned. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the DescribeDirectoriesResult.NextToken member contains a token that you pass in the next call to DescribeDirectories to retrieve the next set of items. You can also specify a maximum number of return results with the Limit parameter.</td>
</tr>
<tr>
    <td><a href="#create_computer"><CopyableCode code="create_computer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-ComputerName"><code>ComputerName</code></a>, <a href="#parameter-Password"><code>Password</code></a></td>
    <td></td>
    <td>Creates an Active Directory computer object in the specified directory.</td>
</tr>
<tr>
    <td><a href="#create_alias"><CopyableCode code="create_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as http:​//<code>&lt;alias&gt;</code>.awsapps.com. After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</td>
</tr>
<tr>
    <td><a href="#create_directory"><CopyableCode code="create_directory" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Password"><code>Password</code></a></td>
    <td></td>
    <td>Creates a Simple AD directory. For more information, see Simple Active Directory in the Directory Service Admin Guide. Before you call CreateDirectory, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the CreateDirectory operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.</td>
</tr>
<tr>
    <td><a href="#update_directory_setup"><CopyableCode code="update_directory_setup" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-UpdateType"><code>UpdateType</code></a></td>
    <td></td>
    <td>Updates directory configuration for the specified update type.</td>
</tr>
<tr>
    <td><a href="#update_radius"><CopyableCode code="update_radius" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-RadiusSettings"><code>RadiusSettings</code></a></td>
    <td></td>
    <td>Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.</td>
</tr>
<tr>
    <td><a href="#delete_directory"><CopyableCode code="delete_directory" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Directory Service directory. Before you call DeleteDirectory, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the DeleteDirectory operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.</td>
</tr>
<tr>
    <td><a href="#cancel_schema_extension"><CopyableCode code="cancel_schema_extension" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-SchemaExtensionId"><code>SchemaExtensionId</code></a></td>
    <td></td>
    <td>Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; Initializing, CreatingSnapshot, and UpdatingSchema.</td>
</tr>
<tr>
    <td><a href="#disable_ca_enrollment_policy"><CopyableCode code="disable_ca_enrollment_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Disables the certificate authority (CA) enrollment policy for the specified directory. This stops automatic certificate enrollment and management for domain-joined clients, but does not affect existing certificates. Disabling the CA enrollment policy prevents new certificates from being automatically enrolled, but existing certificates remain valid and functional until they expire.</td>
</tr>
<tr>
    <td><a href="#disable_client_authentication"><CopyableCode code="disable_client_authentication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Disables alternative client authentication methods for the specified directory.</td>
</tr>
<tr>
    <td><a href="#disable_ldaps"><CopyableCode code="disable_ldaps" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Deactivates LDAP secure calls for the specified directory.</td>
</tr>
<tr>
    <td><a href="#disable_radius"><CopyableCode code="disable_radius" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.</td>
</tr>
<tr>
    <td><a href="#disable_sso"><CopyableCode code="disable_sso" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Disables single-sign on for a directory.</td>
</tr>
<tr>
    <td><a href="#enable_ca_enrollment_policy"><CopyableCode code="enable_ca_enrollment_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-PcaConnectorArn"><code>PcaConnectorArn</code></a></td>
    <td></td>
    <td>Enables certificate authority (CA) enrollment policy for the specified directory. This allows domain-joined clients to automatically request and receive certificates from the specified Amazon Web Services Private Certificate Authority. Before enabling CA enrollment, ensure that the PCA connector is properly configured and accessible from the directory. The connector must be in an active state and have the necessary permissions.</td>
</tr>
<tr>
    <td><a href="#enable_client_authentication"><CopyableCode code="enable_client_authentication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Enables alternative client authentication methods for the specified directory.</td>
</tr>
<tr>
    <td><a href="#enable_ldaps"><CopyableCode code="enable_ldaps" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Activates the switch for the specific directory to always use LDAP secure calls.</td>
</tr>
<tr>
    <td><a href="#enable_radius"><CopyableCode code="enable_radius" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-RadiusSettings"><code>RadiusSettings</code></a></td>
    <td></td>
    <td>Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.</td>
</tr>
<tr>
    <td><a href="#enable_sso"><CopyableCode code="enable_sso" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.</td>
</tr>
<tr>
    <td><a href="#reset_user_password"><CopyableCode code="reset_user_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-NewPassword"><code>NewPassword</code></a></td>
    <td></td>
    <td>Resets the password for any user in your Managed Microsoft AD or Simple AD directory. Disabled users will become enabled and can be authenticated following the API call. You can reset the password for any user in your directory with the following exceptions: For Simple AD, you cannot reset the password for any user that is a member of either the Domain Admins or Enterprise Admins group except for the administrator user. For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the Amazon Web Services Reserved OU. For more information about the OU structure for an Managed Microsoft AD directory, see What Gets Created in the Directory Service Administration Guide.</td>
</tr>
<tr>
    <td><a href="#share_directory"><CopyableCode code="share_directory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-ShareTarget"><code>ShareTarget</code></a>, <a href="#parameter-ShareMethod"><code>ShareMethod</code></a></td>
    <td></td>
    <td>Shares a specified directory (DirectoryId) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region. When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account. The ShareMethod parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (ORGANIZATIONS). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (HANDSHAKE). The ShareNotes parameter is only used when HANDSHAKE is called, which sends a directory sharing request to the directory consumer.</td>
</tr>
<tr>
    <td><a href="#start_schema_extension"><CopyableCode code="start_schema_extension" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-CreateSnapshotBeforeSchemaExtension"><code>CreateSnapshotBeforeSchemaExtension</code></a>, <a href="#parameter-LdifContent"><code>LdifContent</code></a></td>
    <td></td>
    <td>Applies a schema extension to a Microsoft AD directory.</td>
</tr>
<tr>
    <td><a href="#unshare_directory"><CopyableCode code="unshare_directory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-UnshareTarget"><code>UnshareTarget</code></a></td>
    <td></td>
    <td>Stops the directory sharing between the directory owner and consumer accounts.</td>
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
    defaultValue="describe_directories"
    values={[
        { label: 'describe_directories', value: 'describe_directories' }
    ]}
>
<TabItem value="describe_directories">

Obtains information about the directories that belong to this account. You can retrieve information about specific directories by passing the directory identifiers in the DirectoryIds parameter. Otherwise, all directories that belong to the current account are returned. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the DescribeDirectoriesResult.NextToken member contains a token that you pass in the next call to DescribeDirectories to retrieve the next set of items. You can also specify a maximum number of return results with the Limit parameter.

```sql
SELECT
access_url,
alias,
connect_settings,
description,
desired_number_of_domain_controllers,
directory_id,
dns_ip_addrs,
dns_ipv_6_addrs,
edition,
hybrid_settings,
launch_time,
name,
network_type,
os_version,
owner_directory_description,
radius_settings,
radius_status,
regions_info,
share_method,
share_notes,
share_status,
short_name,
size,
sso_enabled,
stage,
stage_last_updated_date_time,
stage_reason,
type,
vpc_settings
FROM aws.ds.directories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_computer"
    values={[
        { label: 'create_computer', value: 'create_computer' },
        { label: 'create_alias', value: 'create_alias' },
        { label: 'create_directory', value: 'create_directory' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_computer">

Creates an Active Directory computer object in the specified directory.

```sql
INSERT INTO aws.ds.directories (
DirectoryId,
ComputerName,
Password,
OrganizationalUnitDistinguishedName,
ComputerAttributes,
region
)
SELECT 
'{{ DirectoryId }}' /* required */,
'{{ ComputerName }}' /* required */,
'{{ Password }}' /* required */,
'{{ OrganizationalUnitDistinguishedName }}',
'{{ ComputerAttributes }}',
'{{ region }}'
RETURNING
computer
;
```
</TabItem>
<TabItem value="create_alias">

Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as http:​//<code>&lt;alias&gt;</code>.awsapps.com. After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.

```sql
INSERT INTO aws.ds.directories (
DirectoryId,
Alias,
region
)
SELECT 
'{{ DirectoryId }}' /* required */,
'{{ Alias }}',
'{{ region }}'
RETURNING
alias,
directory_id
;
```
</TabItem>
<TabItem value="create_directory">

Creates a Simple AD directory. For more information, see Simple Active Directory in the Directory Service Admin Guide. Before you call CreateDirectory, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the CreateDirectory operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.

```sql
INSERT INTO aws.ds.directories (
Name,
ShortName,
Password,
Description,
Size,
VpcSettings,
Tags,
NetworkType,
region
)
SELECT 
'{{ Name }}',
'{{ ShortName }}',
'{{ Password }}' /* required */,
'{{ Description }}',
'{{ Size }}',
'{{ VpcSettings }}',
'{{ Tags }}',
'{{ NetworkType }}',
'{{ region }}'
RETURNING
directory_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: directories
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the directories resource.
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: |
        The identifier of the directory for which to create the alias.
    - name: ComputerName
      value: "{{ ComputerName }}"
      description: |
        The name of the computer account.
    - name: Password
      value: "{{ Password }}"
      description: |
        The password for the directory administrator. The directory creation process creates a directory administrator account with the user name Administrator and this password. If you need to change the password for the administrator account, you can use the ResetUserPassword API call. The regex pattern for this string is made up of the following conditions: Length (?=^.{8,64}$) – Must be between 8 and 64 characters AND any 3 of the following password complexity rules required by Active Directory: Numbers and upper case and lowercase (?=.*\d)(?=.*[A-Z])(?=.*[a-z]) Numbers and special characters and lower case (?=.*\d)(?=.*[^A-Za-z0-9\s])(?=.*[a-z]) Special characters and upper case and lower case (?=.*[^A-Za-z0-9\s])(?=.*[A-Z])(?=.*[a-z]) Numbers and upper case and special characters (?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9\s]) For additional information about how Active Directory passwords are enforced, see Password must meet complexity requirements on the Microsoft website.
    - name: OrganizationalUnitDistinguishedName
      value: "{{ OrganizationalUnitDistinguishedName }}"
      description: |
        The fully-qualified distinguished name of the organizational unit to place the computer account in.
    - name: ComputerAttributes
      description: |
        An array of Attribute objects that contain any LDAP attributes to apply to the computer account.
      value:
        - Name: "{{ Name }}"
          Value: "{{ Value }}"
    - name: Alias
      value: "{{ Alias }}"
      description: |
        The requested alias. The alias must be unique amongst all aliases in Amazon Web Services. This operation throws an EntityAlreadyExistsException error if the alias already exists.
    - name: Name
      value: "{{ Name }}"
      description: |
        The fully qualified name for the directory, such as corp.example.com.
    - name: ShortName
      value: "{{ ShortName }}"
      description: |
        The NetBIOS name of the directory, such as CORP.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the directory.
    - name: Size
      value: "{{ Size }}"
      description: |
        The size of the directory.
      valid_values: ['Small', 'Large']
    - name: VpcSettings
      description: |
        Contains VPC information for the CreateDirectory, CreateMicrosoftAD, or CreateHybridAD operation.
      value:
        VpcId: "{{ VpcId }}"
        SubnetIds:
          - "{{ SubnetIds }}"
    - name: Tags
      description: |
        The tags to be assigned to the Simple AD directory.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: |
        The network type for your directory. Simple AD supports IPv4 and Dual-stack only.
      valid_values: ['Dual-stack', 'IPv4', 'IPv6']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_directory_setup"
    values={[
        { label: 'update_directory_setup', value: 'update_directory_setup' },
        { label: 'update_radius', value: 'update_radius' }
    ]}
>
<TabItem value="update_directory_setup">

Updates directory configuration for the specified update type.

```sql
UPDATE aws.ds.directories
SET 
DirectoryId = '{{ DirectoryId }}',
UpdateType = '{{ UpdateType }}',
OSUpdateSettings = '{{ OSUpdateSettings }}',
DirectorySizeUpdateSettings = '{{ DirectorySizeUpdateSettings }}',
NetworkUpdateSettings = '{{ NetworkUpdateSettings }}',
CreateSnapshotBeforeUpdate = {{ CreateSnapshotBeforeUpdate }}
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required
AND UpdateType = '{{ UpdateType }}' --required;
```
</TabItem>
<TabItem value="update_radius">

Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.

```sql
UPDATE aws.ds.directories
SET 
DirectoryId = '{{ DirectoryId }}',
RadiusSettings = '{{ RadiusSettings }}'
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required
AND RadiusSettings = '{{ RadiusSettings }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_directory"
    values={[
        { label: 'delete_directory', value: 'delete_directory' }
    ]}
>
<TabItem value="delete_directory">

Deletes an Directory Service directory. Before you call DeleteDirectory, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the DeleteDirectory operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference.

```sql
DELETE FROM aws.ds.directories
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_schema_extension"
    values={[
        { label: 'cancel_schema_extension', value: 'cancel_schema_extension' },
        { label: 'disable_ca_enrollment_policy', value: 'disable_ca_enrollment_policy' },
        { label: 'disable_client_authentication', value: 'disable_client_authentication' },
        { label: 'disable_ldaps', value: 'disable_ldaps' },
        { label: 'disable_radius', value: 'disable_radius' },
        { label: 'disable_sso', value: 'disable_sso' },
        { label: 'enable_ca_enrollment_policy', value: 'enable_ca_enrollment_policy' },
        { label: 'enable_client_authentication', value: 'enable_client_authentication' },
        { label: 'enable_ldaps', value: 'enable_ldaps' },
        { label: 'enable_radius', value: 'enable_radius' },
        { label: 'enable_sso', value: 'enable_sso' },
        { label: 'reset_user_password', value: 'reset_user_password' },
        { label: 'share_directory', value: 'share_directory' },
        { label: 'start_schema_extension', value: 'start_schema_extension' },
        { label: 'unshare_directory', value: 'unshare_directory' }
    ]}
>
<TabItem value="cancel_schema_extension">

Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; Initializing, CreatingSnapshot, and UpdatingSchema.

```sql
EXEC aws.ds.directories.cancel_schema_extension 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"SchemaExtensionId": "{{ SchemaExtensionId }}"
}'
;
```
</TabItem>
<TabItem value="disable_ca_enrollment_policy">

Disables the certificate authority (CA) enrollment policy for the specified directory. This stops automatic certificate enrollment and management for domain-joined clients, but does not affect existing certificates. Disabling the CA enrollment policy prevents new certificates from being automatically enrolled, but existing certificates remain valid and functional until they expire.

```sql
EXEC aws.ds.directories.disable_ca_enrollment_policy 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}"
}'
;
```
</TabItem>
<TabItem value="disable_client_authentication">

Disables alternative client authentication methods for the specified directory.

```sql
EXEC aws.ds.directories.disable_client_authentication 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"Type": "{{ Type }}"
}'
;
```
</TabItem>
<TabItem value="disable_ldaps">

Deactivates LDAP secure calls for the specified directory.

```sql
EXEC aws.ds.directories.disable_ldaps 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"Type": "{{ Type }}"
}'
;
```
</TabItem>
<TabItem value="disable_radius">

Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.

```sql
EXEC aws.ds.directories.disable_radius 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}"
}'
;
```
</TabItem>
<TabItem value="disable_sso">

Disables single-sign on for a directory.

```sql
EXEC aws.ds.directories.disable_sso 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"UserName": "{{ UserName }}", 
"Password": "{{ Password }}"
}'
;
```
</TabItem>
<TabItem value="enable_ca_enrollment_policy">

Enables certificate authority (CA) enrollment policy for the specified directory. This allows domain-joined clients to automatically request and receive certificates from the specified Amazon Web Services Private Certificate Authority. Before enabling CA enrollment, ensure that the PCA connector is properly configured and accessible from the directory. The connector must be in an active state and have the necessary permissions.

```sql
EXEC aws.ds.directories.enable_ca_enrollment_policy 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"PcaConnectorArn": "{{ PcaConnectorArn }}"
}'
;
```
</TabItem>
<TabItem value="enable_client_authentication">

Enables alternative client authentication methods for the specified directory.

```sql
EXEC aws.ds.directories.enable_client_authentication 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"Type": "{{ Type }}"
}'
;
```
</TabItem>
<TabItem value="enable_ldaps">

Activates the switch for the specific directory to always use LDAP secure calls.

```sql
EXEC aws.ds.directories.enable_ldaps 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"Type": "{{ Type }}"
}'
;
```
</TabItem>
<TabItem value="enable_radius">

Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.

```sql
EXEC aws.ds.directories.enable_radius 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"RadiusSettings": "{{ RadiusSettings }}"
}'
;
```
</TabItem>
<TabItem value="enable_sso">

Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.

```sql
EXEC aws.ds.directories.enable_sso 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"UserName": "{{ UserName }}", 
"Password": "{{ Password }}"
}'
;
```
</TabItem>
<TabItem value="reset_user_password">

Resets the password for any user in your Managed Microsoft AD or Simple AD directory. Disabled users will become enabled and can be authenticated following the API call. You can reset the password for any user in your directory with the following exceptions: For Simple AD, you cannot reset the password for any user that is a member of either the Domain Admins or Enterprise Admins group except for the administrator user. For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the Amazon Web Services Reserved OU. For more information about the OU structure for an Managed Microsoft AD directory, see What Gets Created in the Directory Service Administration Guide.

```sql
EXEC aws.ds.directories.reset_user_password 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"UserName": "{{ UserName }}", 
"NewPassword": "{{ NewPassword }}"
}'
;
```
</TabItem>
<TabItem value="share_directory">

Shares a specified directory (DirectoryId) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region. When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account. The ShareMethod parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (ORGANIZATIONS). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (HANDSHAKE). The ShareNotes parameter is only used when HANDSHAKE is called, which sends a directory sharing request to the directory consumer.

```sql
EXEC aws.ds.directories.share_directory 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"ShareNotes": "{{ ShareNotes }}", 
"ShareTarget": "{{ ShareTarget }}", 
"ShareMethod": "{{ ShareMethod }}"
}'
;
```
</TabItem>
<TabItem value="start_schema_extension">

Applies a schema extension to a Microsoft AD directory.

```sql
EXEC aws.ds.directories.start_schema_extension 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"CreateSnapshotBeforeSchemaExtension": {{ CreateSnapshotBeforeSchemaExtension }}, 
"LdifContent": "{{ LdifContent }}", 
"Description": "{{ Description }}"
}'
;
```
</TabItem>
<TabItem value="unshare_directory">

Stops the directory sharing between the directory owner and consumer accounts.

```sql
EXEC aws.ds.directories.unshare_directory 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}", 
"UnshareTarget": "{{ UnshareTarget }}"
}'
;
```
</TabItem>
</Tabs>
