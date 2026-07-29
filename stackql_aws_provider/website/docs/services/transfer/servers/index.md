--- 
title: servers
hide_title: false
hide_table_of_contents: false
keywords:
  - servers
  - transfer
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

Creates, updates, deletes, gets or lists a <code>servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.servers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_server"
    values={[
        { label: 'describe_server', value: 'describe_server' },
        { label: 'list_servers', value: 'list_servers' }
    ]}
>
<TabItem value="describe_server">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique Amazon Resource Name (ARN) of the server. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="as_2_service_managed_egress_ip_addresses" /></td>
    <td><code>array</code></td>
    <td>The list of egress IP addresses of this server. These IP addresses are only relevant for servers that use the AS2 protocol. They are used for sending asynchronous MDNs. These IP addresses are assigned automatically when you create an AS2 server. Additionally, if you update an existing server and add the AS2 protocol, static IP addresses are assigned as well.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate" /></td>
    <td><code>string</code></td>
    <td>Specifies the ARN of the Amazon Web ServicesCertificate Manager (ACM) certificate. Required when Protocols is set to FTPS.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Specifies the domain of the storage system that is used for file transfers. There are two domains available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The default value is S3. (S3, EFS)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_details" /></td>
    <td><code>object</code></td>
    <td>The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>Defines the type of endpoint that your server is connected to. If your server is connected to a VPC endpoint, your server isn't accessible over the public internet. (PUBLIC, VPC, VPC_ENDPOINT)</td>
</tr>
<tr>
    <td><CopyableCode code="host_key_fingerprint" /></td>
    <td><code>string</code></td>
    <td>Specifies the Base64-encoded SHA256 fingerprint of the server's host key. This value is equivalent to the output of the ssh-keygen -l -f my-new-server-key command.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_details" /></td>
    <td><code>object</code></td>
    <td>Specifies information to call a customer-supplied authentication API. This field is not populated when the IdentityProviderType of a server is AWS_DIRECTORY_SERVICE or SERVICE_MANAGED.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_type" /></td>
    <td><code>string</code></td>
    <td>The mode of authentication for a server. The default value is SERVICE_MANAGED, which allows you to store and access user credentials within the Transfer Family service. Use AWS_DIRECTORY_SERVICE to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the IdentityProviderDetails parameter. Use the API_GATEWAY value to integrate with an identity provider of your choosing. The API_GATEWAY setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the IdentityProviderDetails parameter. Use the AWS_LAMBDA value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the Function parameter for the IdentityProviderDetails data type. (SERVICE_MANAGED, API_GATEWAY, AWS_DIRECTORY_SERVICE, AWS_LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to use IPv4 only, or to use dual-stack (IPv4 and IPv6) for your Transfer Family endpoint. The default value is IPV4. The IpAddressType parameter has the following limitations: It cannot be changed while the server is online. You must stop the server before modifying this parameter. It cannot be updated to DUALSTACK if the server has AddressAllocationIds specified. When using DUALSTACK as the IpAddressType, you cannot set the AddressAllocationIds parameter for the EndpointDetails for the server. (IPV4, DUALSTACK)</td>
</tr>
<tr>
    <td><CopyableCode code="logging_role" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in your CloudWatch logs. (pattern: &lt;code&gt;(|arn:.*role/\S+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="post_authentication_login_banner" /></td>
    <td><code>string</code></td>
    <td>Specifies a string to display when users connect to a server. This string is displayed after the user authenticates. The SFTP protocol does not support post-authentication display banners. (pattern: &lt;code&gt;&#91;\x09-\x0D\x20-\x7E&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pre_authentication_login_banner" /></td>
    <td><code>string</code></td>
    <td>Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system: This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel. (pattern: &lt;code&gt;&#91;\x09-\x0D\x20-\x7E&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_details" /></td>
    <td><code>object</code></td>
    <td>The protocol settings that are configured for your server. Avoid placing Network Load Balancers (NLBs) or NAT gateways in front of Transfer Family servers, as this increases costs and can cause performance issues, including reduced connection limits for FTPS. For more details, see Avoid placing NLBs and NATs in front of Transfer Family. To indicate passive mode (for FTP and FTPS protocols), use the PassiveIp parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer. To ignore the error that is generated when the client attempts to use the SETSTAT command on a file that you are uploading to an Amazon S3 bucket, use the SetStatOption parameter. To have the Transfer Family server ignore the SETSTAT command and upload files without needing to make any changes to your SFTP client, set the value to ENABLE_NO_OP. If you set the SetStatOption parameter to ENABLE_NO_OP, Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a SETSTAT call. To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the TlsSessionResumptionMode parameter. As2Transports indicates the transport method for the AS2 messages. Currently, only HTTP is supported.</td>
</tr>
<tr>
    <td><CopyableCode code="protocols" /></td>
    <td><code>array</code></td>
    <td>Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are: SFTP (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH FTPS (File Transfer Protocol Secure): File transfer with TLS encryption FTP (File Transfer Protocol): Unencrypted file transfer AS2 (Applicability Statement 2): used for transporting structured business-to-business data If you select FTPS, you must choose a certificate stored in Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS. If Protocol includes either FTP or FTPS, then the EndpointType must be VPC and the IdentityProviderType must be either AWS_DIRECTORY_SERVICE, AWS_LAMBDA, or API_GATEWAY. If Protocol includes FTP, then AddressAllocationIds cannot be associated. If Protocol is set only to SFTP, the EndpointType can be set to PUBLIC and the IdentityProviderType can be set any of the supported identity types: SERVICE_MANAGED, AWS_DIRECTORY_SERVICE, AWS_LAMBDA, or API_GATEWAY. If Protocol includes AS2, then the EndpointType must be VPC, and domain must be Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_storage_options" /></td>
    <td><code>object</code></td>
    <td>Specifies whether or not performance for your Amazon S3 directories is optimized. If using the console, this is enabled by default. If using the API or CLI, this is disabled by default. By default, home directory mappings have a TYPE of DIRECTORY. If you enable this option, you would then need to explicitly set the HomeDirectoryMapEntry Type to FILE if you want a mapping to have a file target.</td>
</tr>
<tr>
    <td><CopyableCode code="security_policy_name" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the security policy for the server. (pattern: &lt;code&gt;Transfer&#91;A-Za-z0-9&#93;*SecurityPolicy-&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique system-assigned identifier for a server that you instantiate. (pattern: &lt;code&gt;s-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The condition of the server that was described. A value of ONLINE indicates that the server can accept jobs and transfer files. A State value of OFFLINE means that the server cannot perform file transfer operations. The states of STARTING and STOPPING indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of START_FAILED or STOP_FAILED can indicate an error condition. (OFFLINE, ONLINE, STARTING, STOPPING, START_FAILED, STOP_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="structured_log_destinations" /></td>
    <td><code>array</code></td>
    <td>Specifies the log groups to which your server logs are sent. To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows: arn:aws:logs:region-name:amazon-account-id:log-group:log-group-name:* For example, arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:* If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty value for this parameter in an update-server call. For example: update-server --server-id s-1234567890abcdef0 --structured-log-destinations</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Specifies the key-value pairs that you can use to search for and group servers that were assigned to the server that was described.</td>
</tr>
<tr>
    <td><CopyableCode code="user_count" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of users that are assigned to a server you specified with the ServerId.</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_details" /></td>
    <td><code>object</code></td>
    <td>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow. In addition to a workflow to execute when a file is uploaded completely, WorkflowDetails can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects while the file is still being uploaded.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_servers">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique Amazon Resource Name (ARN) for a server to be listed. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Specifies the domain of the storage system that is used for file transfers. There are two domains available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The default value is S3. (S3, EFS)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of VPC endpoint that your server is connected to. If your server is connected to a VPC endpoint, your server isn't accessible over the public internet. (PUBLIC, VPC, VPC_ENDPOINT)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_type" /></td>
    <td><code>string</code></td>
    <td>The mode of authentication for a server. The default value is SERVICE_MANAGED, which allows you to store and access user credentials within the Transfer Family service. Use AWS_DIRECTORY_SERVICE to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the IdentityProviderDetails parameter. Use the API_GATEWAY value to integrate with an identity provider of your choosing. The API_GATEWAY setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the IdentityProviderDetails parameter. Use the AWS_LAMBDA value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the Function parameter for the IdentityProviderDetails data type. (SERVICE_MANAGED, API_GATEWAY, AWS_DIRECTORY_SERVICE, AWS_LAMBDA)</td>
</tr>
<tr>
    <td><CopyableCode code="logging_role" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in your CloudWatch logs. (pattern: &lt;code&gt;arn:.*role/\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique system assigned identifier for the servers that were listed. (pattern: &lt;code&gt;s-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The condition of the server that was described. A value of ONLINE indicates that the server can accept jobs and transfer files. A State value of OFFLINE means that the server cannot perform file transfer operations. The states of STARTING and STOPPING indicate that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of START_FAILED or STOP_FAILED can indicate an error condition. (OFFLINE, ONLINE, STARTING, STOPPING, START_FAILED, STOP_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="user_count" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of users that are assigned to a server you specified with the ServerId.</td>
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
    <td><a href="#describe_server"><CopyableCode code="describe_server" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a file transfer protocol-enabled server that you specify by passing the ServerId parameter. The response contains a description of a server's properties. When you set EndpointType to VPC, the response will contain the EndpointDetails.</td>
</tr>
<tr>
    <td><a href="#list_servers"><CopyableCode code="list_servers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_server"><CopyableCode code="create_server" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated ServerId property that is assigned to the newly created server.</td>
</tr>
<tr>
    <td><a href="#update_server"><CopyableCode code="update_server" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a></td>
    <td></td>
    <td>Updates the file transfer protocol-enabled server's properties after that server has been created. The UpdateServer call returns the ServerId of the server you updated.</td>
</tr>
<tr>
    <td><a href="#delete_ssh_public_key"><CopyableCode code="delete_ssh_public_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user's Secure Shell (SSH) public key.</td>
</tr>
<tr>
    <td><a href="#delete_server"><CopyableCode code="delete_server" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the file transfer protocol-enabled server that you specify. No response returns from this operation.</td>
</tr>
<tr>
    <td><a href="#import_host_key"><CopyableCode code="import_host_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a>, <a href="#parameter-HostKeyBody"><code>HostKeyBody</code></a></td>
    <td></td>
    <td>Adds a host key to the server that's specified by the ServerId parameter.</td>
</tr>
<tr>
    <td><a href="#import_ssh_public_key"><CopyableCode code="import_ssh_public_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a>, <a href="#parameter-SshPublicKeyBody"><code>SshPublicKeyBody</code></a>, <a href="#parameter-UserName"><code>UserName</code></a></td>
    <td></td>
    <td>Adds a Secure Shell (SSH) public key to a Transfer Family user identified by a UserName value assigned to the specific file transfer protocol-enabled server, identified by ServerId. The response returns the UserName value, the ServerId value, and the name of the SshPublicKeyId.</td>
</tr>
<tr>
    <td><a href="#start_server"><CopyableCode code="start_server" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a></td>
    <td></td>
    <td>Changes the state of a file transfer protocol-enabled server from OFFLINE to ONLINE. It has no impact on a server that is already ONLINE. An ONLINE server can accept and process file transfer jobs. The state of STARTING indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of START_FAILED can indicate an error condition. No response is returned from this call.</td>
</tr>
<tr>
    <td><a href="#stop_server"><CopyableCode code="stop_server" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a></td>
    <td></td>
    <td>Changes the state of a file transfer protocol-enabled server from ONLINE to OFFLINE. An OFFLINE server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server. Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed. The state of STOPPING indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of STOP_FAILED can indicate an error condition. No response is returned from this call.</td>
</tr>
<tr>
    <td><a href="#test_identity_provider"><CopyableCode code="test_identity_provider" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerId"><code>ServerId</code></a>, <a href="#parameter-UserName"><code>UserName</code></a></td>
    <td></td>
    <td>If the IdentityProviderType of a file transfer protocol-enabled server is AWS_DIRECTORY_SERVICE or API_Gateway, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service. The ServerId and UserName parameters are required. The ServerProtocol, SourceIp, and UserPassword are all optional. Note the following: You cannot use TestIdentityProvider if the IdentityProviderType of your server is SERVICE_MANAGED. TestIdentityProvider does not work with keys: it only accepts passwords. TestIdentityProvider can test the password operation for a custom Identity Provider that handles keys and passwords. If you provide any incorrect values for any parameters, the Response field is empty. If you provide a server ID for a server that uses service-managed users, you get an error: An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-server-ID not configured for external auth If you enter a Server ID for the --server-id parameter that does not identify an actual Transfer server, you receive the following error: An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server. It is possible your sever is in a different region. You can specify a region by adding the following: --region region-code, such as --region us-east-2 to specify a server in US East (Ohio).</td>
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
    defaultValue="describe_server"
    values={[
        { label: 'describe_server', value: 'describe_server' },
        { label: 'list_servers', value: 'list_servers' }
    ]}
>
<TabItem value="describe_server">

Describes a file transfer protocol-enabled server that you specify by passing the ServerId parameter. The response contains a description of a server's properties. When you set EndpointType to VPC, the response will contain the EndpointDetails.

```sql
SELECT
arn,
as_2_service_managed_egress_ip_addresses,
certificate,
domain,
endpoint_details,
endpoint_type,
host_key_fingerprint,
identity_provider_details,
identity_provider_type,
ip_address_type,
logging_role,
post_authentication_login_banner,
pre_authentication_login_banner,
protocol_details,
protocols,
s3_storage_options,
security_policy_name,
server_id,
state,
structured_log_destinations,
tags,
user_count,
workflow_details
FROM aws.transfer.servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_servers">

Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.

```sql
SELECT
arn,
domain,
endpoint_type,
identity_provider_type,
logging_role,
server_id,
state,
user_count
FROM aws.transfer.servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_server"
    values={[
        { label: 'create_server', value: 'create_server' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_server">

Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated ServerId property that is assigned to the newly created server.

```sql
INSERT INTO aws.transfer.servers (
Certificate,
Domain,
EndpointDetails,
EndpointType,
HostKey,
IdentityProviderDetails,
IdentityProviderType,
LoggingRole,
PostAuthenticationLoginBanner,
PreAuthenticationLoginBanner,
Protocols,
ProtocolDetails,
SecurityPolicyName,
Tags,
WorkflowDetails,
StructuredLogDestinations,
S3StorageOptions,
IpAddressType,
region
)
SELECT 
'{{ Certificate }}',
'{{ Domain }}',
'{{ EndpointDetails }}',
'{{ EndpointType }}',
'{{ HostKey }}',
'{{ IdentityProviderDetails }}',
'{{ IdentityProviderType }}',
'{{ LoggingRole }}',
'{{ PostAuthenticationLoginBanner }}',
'{{ PreAuthenticationLoginBanner }}',
'{{ Protocols }}',
'{{ ProtocolDetails }}',
'{{ SecurityPolicyName }}',
'{{ Tags }}',
'{{ WorkflowDetails }}',
'{{ StructuredLogDestinations }}',
'{{ S3StorageOptions }}',
'{{ IpAddressType }}',
'{{ region }}'
RETURNING
server_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: servers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the servers resource.
    - name: Certificate
      value: "{{ Certificate }}"
      description: |
        The Amazon Resource Name (ARN) of the Certificate Manager (ACM) certificate. Required when Protocols is set to FTPS. To request a new public certificate, see Request a public certificate in the Certificate Manager User Guide. To import an existing certificate into ACM, see Importing certificates into ACM in the Certificate Manager User Guide. To request a private certificate to use FTPS through private IP addresses, see Request a private certificate in the Certificate Manager User Guide. Certificates with the following cryptographic algorithms and key sizes are supported: 2048-bit RSA (RSA_2048) 4096-bit RSA (RSA_4096) Elliptic Prime Curve 256 bit (EC_prime256v1) Elliptic Prime Curve 384 bit (EC_secp384r1) Elliptic Prime Curve 521 bit (EC_secp521r1) The certificate must be a valid SSL/TLS X.509 version 3 certificate with FQDN or IP address specified and information about the issuer.
    - name: Domain
      value: "{{ Domain }}"
      description: |
        The domain of the storage system that is used for file transfers. There are two domains available: Amazon Simple Storage Service (Amazon S3) and Amazon Elastic File System (Amazon EFS). The default value is S3. After the server is created, the domain cannot be changed.
      valid_values: ['S3', 'EFS']
    - name: EndpointDetails
      description: |
        The virtual private cloud (VPC) endpoint settings that are configured for your server. When you host your endpoint within your VPC, you can make your endpoint accessible only to resources within your VPC, or you can attach Elastic IP addresses and make your endpoint accessible to clients over the internet. Your VPC's default security groups are automatically assigned to your endpoint.
      value:
        AddressAllocationIds:
          - "{{ AddressAllocationIds }}"
        SubnetIds:
          - "{{ SubnetIds }}"
        VpcEndpointId: "{{ VpcEndpointId }}"
        VpcId: "{{ VpcId }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
    - name: EndpointType
      value: "{{ EndpointType }}"
      description: |
        The type of endpoint that you want your server to use. You can choose to make your server's endpoint publicly accessible (PUBLIC) or host it inside your VPC. With an endpoint that is hosted in a VPC, you can restrict access to your server and resources only within your VPC or choose to make it internet facing by attaching Elastic IP addresses directly to it. After May 19, 2021, you won't be able to create a server using EndpointType=VPC_ENDPOINT in your Amazon Web Services account if your account hasn't already done so before May 19, 2021. If you have already created servers with EndpointType=VPC_ENDPOINT in your Amazon Web Services account on or before May 19, 2021, you will not be affected. After this date, use EndpointType=VPC. For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint. It is recommended that you use VPC as the EndpointType. With this endpoint type, you have the option to directly associate up to three Elastic IPv4 addresses (BYO IP included) with your server's endpoint and use VPC security groups to restrict traffic by the client's public IP address. This is not possible with EndpointType set to VPC_ENDPOINT.
      valid_values: ['PUBLIC', 'VPC', 'VPC_ENDPOINT']
    - name: HostKey
      value: "{{ HostKey }}"
      description: |
        The RSA, ECDSA, or ED25519 private key to use for your SFTP-enabled server. You can add multiple host keys, in case you want to rotate keys, or have a set of active keys that use different algorithms. Use the following command to generate an RSA 2048 bit key with no passphrase: ssh-keygen -t rsa -b 2048 -N "" -m PEM -f my-new-server-key. Use a minimum value of 2048 for the -b option. You can create a stronger key by using 3072 or 4096. Use the following command to generate an ECDSA 256 bit key with no passphrase: ssh-keygen -t ecdsa -b 256 -N "" -m PEM -f my-new-server-key. Valid values for the -b option for ECDSA are 256, 384, and 521. Use the following command to generate an ED25519 key with no passphrase: ssh-keygen -t ed25519 -N "" -f my-new-server-key. For all of these commands, you can replace my-new-server-key with a string of your choice. If you aren't planning to migrate existing users from an existing SFTP-enabled server to a new server, don't update the host key. Accidentally changing a server's host key can be disruptive. For more information, see Manage host keys for your SFTP-enabled server in the Transfer Family User Guide.
    - name: IdentityProviderDetails
      description: |
        Required when IdentityProviderType is set to AWS_DIRECTORY_SERVICE, Amazon Web Services_LAMBDA or API_GATEWAY. Accepts an array containing all of the information required to use a directory in AWS_DIRECTORY_SERVICE or invoke a customer-supplied authentication API, including the API Gateway URL. Cannot be specified when IdentityProviderType is set to SERVICE_MANAGED.
      value:
        Url: "{{ Url }}"
        InvocationRole: "{{ InvocationRole }}"
        DirectoryId: "{{ DirectoryId }}"
        Function: "{{ Function }}"
        SftpAuthenticationMethods: "{{ SftpAuthenticationMethods }}"
    - name: IdentityProviderType
      value: "{{ IdentityProviderType }}"
      description: |
        The mode of authentication for a server. The default value is SERVICE_MANAGED, which allows you to store and access user credentials within the Transfer Family service. Use AWS_DIRECTORY_SERVICE to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the IdentityProviderDetails parameter. Use the API_GATEWAY value to integrate with an identity provider of your choosing. The API_GATEWAY setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the IdentityProviderDetails parameter. Use the AWS_LAMBDA value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the Function parameter for the IdentityProviderDetails data type.
      valid_values: ['SERVICE_MANAGED', 'API_GATEWAY', 'AWS_DIRECTORY_SERVICE', 'AWS_LAMBDA']
    - name: LoggingRole
      value: "{{ LoggingRole }}"
      description: |
        The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that allows a server to turn on Amazon CloudWatch logging for Amazon S3 or Amazon EFS events. When set, you can view user activity in your CloudWatch logs.
    - name: PostAuthenticationLoginBanner
      value: "{{ PostAuthenticationLoginBanner }}"
      description: |
        Specifies a string to display when users connect to a server. This string is displayed after the user authenticates. The SFTP protocol does not support post-authentication display banners.
    - name: PreAuthenticationLoginBanner
      value: "{{ PreAuthenticationLoginBanner }}"
      description: |
        Specifies a string to display when users connect to a server. This string is displayed before the user authenticates. For example, the following banner displays details about using the system: This system is for the use of authorized users only. Individuals using this computer system without authority, or in excess of their authority, are subject to having all of their activities on this system monitored and recorded by system personnel.
    - name: Protocols
      value:
        - "{{ Protocols }}"
      description: |
        Specifies the file transfer protocol or protocols over which your file transfer protocol client can connect to your server's endpoint. The available protocols are: SFTP (Secure Shell (SSH) File Transfer Protocol): File transfer over SSH FTPS (File Transfer Protocol Secure): File transfer with TLS encryption FTP (File Transfer Protocol): Unencrypted file transfer AS2 (Applicability Statement 2): used for transporting structured business-to-business data If you select FTPS, you must choose a certificate stored in Certificate Manager (ACM) which is used to identify your server when clients connect to it over FTPS. If Protocol includes either FTP or FTPS, then the EndpointType must be VPC and the IdentityProviderType must be either AWS_DIRECTORY_SERVICE, AWS_LAMBDA, or API_GATEWAY. If Protocol includes FTP, then AddressAllocationIds cannot be associated. If Protocol is set only to SFTP, the EndpointType can be set to PUBLIC and the IdentityProviderType can be set any of the supported identity types: SERVICE_MANAGED, AWS_DIRECTORY_SERVICE, AWS_LAMBDA, or API_GATEWAY. If Protocol includes AS2, then the EndpointType must be VPC, and domain must be Amazon S3.
    - name: ProtocolDetails
      description: |
        The protocol settings that are configured for your server. Avoid placing Network Load Balancers (NLBs) or NAT gateways in front of Transfer Family servers, as this increases costs and can cause performance issues, including reduced connection limits for FTPS. For more details, see Avoid placing NLBs and NATs in front of Transfer Family. To indicate passive mode (for FTP and FTPS protocols), use the PassiveIp parameter. Enter a single dotted-quad IPv4 address, such as the external IP address of a firewall, router, or load balancer. To ignore the error that is generated when the client attempts to use the SETSTAT command on a file that you are uploading to an Amazon S3 bucket, use the SetStatOption parameter. To have the Transfer Family server ignore the SETSTAT command and upload files without needing to make any changes to your SFTP client, set the value to ENABLE_NO_OP. If you set the SetStatOption parameter to ENABLE_NO_OP, Transfer Family generates a log entry to Amazon CloudWatch Logs, so that you can determine when the client is making a SETSTAT call. To determine whether your Transfer Family server resumes recent, negotiated sessions through a unique session ID, use the TlsSessionResumptionMode parameter. As2Transports indicates the transport method for the AS2 messages. Currently, only HTTP is supported.
      value:
        PassiveIp: "{{ PassiveIp }}"
        TlsSessionResumptionMode: "{{ TlsSessionResumptionMode }}"
        SetStatOption: "{{ SetStatOption }}"
        As2Transports:
          - "{{ As2Transports }}"
    - name: SecurityPolicyName
      value: "{{ SecurityPolicyName }}"
      description: |
        Specifies the name of the security policy for the server.
    - name: Tags
      description: |
        Key-value pairs that can be used to group and search for servers.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: WorkflowDetails
      description: |
        Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow. In addition to a workflow to execute when a file is uploaded completely, WorkflowDetails can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects while the file is still being uploaded.
      value:
        OnUpload:
          - WorkflowId: "{{ WorkflowId }}"
            ExecutionRole: "{{ ExecutionRole }}"
        OnPartialUpload:
          - WorkflowId: "{{ WorkflowId }}"
            ExecutionRole: "{{ ExecutionRole }}"
    - name: StructuredLogDestinations
      value:
        - "{{ StructuredLogDestinations }}"
      description: |
        Specifies the log groups to which your server logs are sent. To specify a log group, you must provide the ARN for an existing log group. In this case, the format of the log group is as follows: arn:aws:logs:region-name:amazon-account-id:log-group:log-group-name:* For example, arn:aws:logs:us-east-1:111122223333:log-group:mytestgroup:* If you have previously specified a log group for a server, you can clear it, and in effect turn off structured logging, by providing an empty value for this parameter in an update-server call. For example: update-server --server-id s-1234567890abcdef0 --structured-log-destinations
    - name: S3StorageOptions
      description: |
        Specifies whether or not performance for your Amazon S3 directories is optimized. If using the console, this is enabled by default. If using the API or CLI, this is disabled by default. By default, home directory mappings have a TYPE of DIRECTORY. If you enable this option, you would then need to explicitly set the HomeDirectoryMapEntry Type to FILE if you want a mapping to have a file target.
      value:
        DirectoryListingOptimization: "{{ DirectoryListingOptimization }}"
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: |
        Specifies whether to use IPv4 only, or to use dual-stack (IPv4 and IPv6) for your Transfer Family endpoint. The default value is IPV4. The IpAddressType parameter has the following limitations: It cannot be changed while the server is online. You must stop the server before modifying this parameter. It cannot be updated to DUALSTACK if the server has AddressAllocationIds specified. When using DUALSTACK as the IpAddressType, you cannot set the AddressAllocationIds parameter for the EndpointDetails for the server.
      valid_values: ['IPV4', 'DUALSTACK']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_server"
    values={[
        { label: 'update_server', value: 'update_server' }
    ]}
>
<TabItem value="update_server">

Updates the file transfer protocol-enabled server's properties after that server has been created. The UpdateServer call returns the ServerId of the server you updated.

```sql
UPDATE aws.transfer.servers
SET 
Certificate = '{{ Certificate }}',
ProtocolDetails = '{{ ProtocolDetails }}',
EndpointDetails = '{{ EndpointDetails }}',
EndpointType = '{{ EndpointType }}',
HostKey = '{{ HostKey }}',
IdentityProviderDetails = '{{ IdentityProviderDetails }}',
LoggingRole = '{{ LoggingRole }}',
PostAuthenticationLoginBanner = '{{ PostAuthenticationLoginBanner }}',
PreAuthenticationLoginBanner = '{{ PreAuthenticationLoginBanner }}',
Protocols = '{{ Protocols }}',
SecurityPolicyName = '{{ SecurityPolicyName }}',
ServerId = '{{ ServerId }}',
WorkflowDetails = '{{ WorkflowDetails }}',
StructuredLogDestinations = '{{ StructuredLogDestinations }}',
S3StorageOptions = '{{ S3StorageOptions }}',
IpAddressType = '{{ IpAddressType }}',
IdentityProviderType = '{{ IdentityProviderType }}'
WHERE 
region = '{{ region }}' --required
AND ServerId = '{{ ServerId }}' --required
RETURNING
server_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ssh_public_key"
    values={[
        { label: 'delete_ssh_public_key', value: 'delete_ssh_public_key' },
        { label: 'delete_server', value: 'delete_server' }
    ]}
>
<TabItem value="delete_ssh_public_key">

Deletes a user's Secure Shell (SSH) public key.

```sql
DELETE FROM aws.transfer.servers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_server">

Deletes the file transfer protocol-enabled server that you specify. No response returns from this operation.

```sql
DELETE FROM aws.transfer.servers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_host_key"
    values={[
        { label: 'import_host_key', value: 'import_host_key' },
        { label: 'import_ssh_public_key', value: 'import_ssh_public_key' },
        { label: 'start_server', value: 'start_server' },
        { label: 'stop_server', value: 'stop_server' },
        { label: 'test_identity_provider', value: 'test_identity_provider' }
    ]}
>
<TabItem value="import_host_key">

Adds a host key to the server that's specified by the ServerId parameter.

```sql
EXEC aws.transfer.servers.import_host_key 
@region='{{ region }}' --required 
@@json=
'{
"ServerId": "{{ ServerId }}", 
"HostKeyBody": "{{ HostKeyBody }}", 
"Description": "{{ Description }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="import_ssh_public_key">

Adds a Secure Shell (SSH) public key to a Transfer Family user identified by a UserName value assigned to the specific file transfer protocol-enabled server, identified by ServerId. The response returns the UserName value, the ServerId value, and the name of the SshPublicKeyId.

```sql
EXEC aws.transfer.servers.import_ssh_public_key 
@region='{{ region }}' --required 
@@json=
'{
"ServerId": "{{ ServerId }}", 
"SshPublicKeyBody": "{{ SshPublicKeyBody }}", 
"UserName": "{{ UserName }}"
}'
;
```
</TabItem>
<TabItem value="start_server">

Changes the state of a file transfer protocol-enabled server from OFFLINE to ONLINE. It has no impact on a server that is already ONLINE. An ONLINE server can accept and process file transfer jobs. The state of STARTING indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of START_FAILED can indicate an error condition. No response is returned from this call.

```sql
EXEC aws.transfer.servers.start_server 
@region='{{ region }}' --required 
@@json=
'{
"ServerId": "{{ ServerId }}"
}'
;
```
</TabItem>
<TabItem value="stop_server">

Changes the state of a file transfer protocol-enabled server from ONLINE to OFFLINE. An OFFLINE server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server. Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed. The state of STOPPING indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of STOP_FAILED can indicate an error condition. No response is returned from this call.

```sql
EXEC aws.transfer.servers.stop_server 
@region='{{ region }}' --required 
@@json=
'{
"ServerId": "{{ ServerId }}"
}'
;
```
</TabItem>
<TabItem value="test_identity_provider">

If the IdentityProviderType of a file transfer protocol-enabled server is AWS_DIRECTORY_SERVICE or API_Gateway, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service. The ServerId and UserName parameters are required. The ServerProtocol, SourceIp, and UserPassword are all optional. Note the following: You cannot use TestIdentityProvider if the IdentityProviderType of your server is SERVICE_MANAGED. TestIdentityProvider does not work with keys: it only accepts passwords. TestIdentityProvider can test the password operation for a custom Identity Provider that handles keys and passwords. If you provide any incorrect values for any parameters, the Response field is empty. If you provide a server ID for a server that uses service-managed users, you get an error: An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-server-ID not configured for external auth If you enter a Server ID for the --server-id parameter that does not identify an actual Transfer server, you receive the following error: An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server. It is possible your sever is in a different region. You can specify a region by adding the following: --region region-code, such as --region us-east-2 to specify a server in US East (Ohio).

```sql
EXEC aws.transfer.servers.test_identity_provider 
@region='{{ region }}' --required 
@@json=
'{
"ServerId": "{{ ServerId }}", 
"ServerProtocol": "{{ ServerProtocol }}", 
"SourceIp": "{{ SourceIp }}", 
"UserName": "{{ UserName }}", 
"UserPassword": "{{ UserPassword }}"
}'
;
```
</TabItem>
</Tabs>
