--- 
title: gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - gateways
  - storagegateway
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

Creates, updates, deletes, gets or lists a <code>gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_gateways"
    values={[
        { label: 'list_gateways', value: 'list_gateways' }
    ]}
>
<TabItem value="list_gateways">

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
    <td><CopyableCode code="DeprecationDate" /></td>
    <td><code>string</code></td>
    <td>Date after which this gateway will not receive software updates for new features and bug fixes.</td>
</tr>
<tr>
    <td><CopyableCode code="Ec2InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon EC2 instance that was used to launch the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="Ec2InstanceRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the Amazon EC2 instance is located.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayName" /></td>
    <td><code>string</code></td>
    <td>The name of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayOperationalState" /></td>
    <td><code>string</code></td>
    <td>The state of the gateway. Valid Values: DISABLED | ACTIVE</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayType" /></td>
    <td><code>string</code></td>
    <td>The type of the gateway. Amazon FSx File Gateway is no longer available to new customers. Existing customers of FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit this blog post.</td>
</tr>
<tr>
    <td><CopyableCode code="HostEnvironment" /></td>
    <td><code>string</code></td>
    <td>The type of hardware or software platform on which the gateway is running. Tape Gateway is no longer available on Snow Family devices. (VMWARE, HYPER-V, EC2, KVM, OTHER, SNOWBALL)</td>
</tr>
<tr>
    <td><CopyableCode code="HostEnvironmentId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the specific instance of the host platform running the gateway. This value is only available for certain host environments, and its format depends on the host environment type.</td>
</tr>
<tr>
    <td><CopyableCode code="SoftwareVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the software running on the gateway appliance.</td>
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
    <td><a href="#list_gateways"><CopyableCode code="list_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response. If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.</td>
</tr>
<tr>
    <td><a href="#set_local_console_password"><CopyableCode code="set_local_console_password" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-LocalConsolePassword"><code>LocalConsolePassword</code></a></td>
    <td></td>
    <td>Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.</td>
</tr>
<tr>
    <td><a href="#set_smb_guest_password"><CopyableCode code="set_smb_guest_password" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-Password"><code>Password</code></a></td>
    <td></td>
    <td>Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method for the file share is set to GuestAccess. This operation only supported for S3 File Gateways</td>
</tr>
<tr>
    <td><a href="#update_smb_local_groups"><CopyableCode code="update_smb_local_groups" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-SMBLocalGroups"><code>SMBLocalGroups</code></a></td>
    <td></td>
    <td>Updates the list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.</td>
</tr>
<tr>
    <td><a href="#update_smb_security_strategy"><CopyableCode code="update_smb_security_strategy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-SMBSecurityStrategy"><code>SMBSecurityStrategy</code></a></td>
    <td></td>
    <td>Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only supported for Amazon S3 file gateways. For information about configuring this setting using the Amazon Web Services console, see Setting a security level for your gateway in the Amazon S3 File Gateway User Guide. A higher security strategy level can affect performance of the gateway.</td>
</tr>
<tr>
    <td><a href="#update_gateway_software_now"><CopyableCode code="update_gateway_software_now" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When you make this request, you get a 200 OK success response immediately. However, it might take some time for the update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state. A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see Customizing your Windows iSCSI settings and Customizing your Linux iSCSI settings, respectively.</td>
</tr>
<tr>
    <td><a href="#delete_gateway"><CopyableCode code="delete_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment. You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription. If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the Storage Gateway detail page.</td>
</tr>
<tr>
    <td><a href="#activate_gateway"><CopyableCode code="activate_gateway" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ActivationKey"><code>ActivationKey</code></a>, <a href="#parameter-GatewayName"><code>GatewayName</code></a>, <a href="#parameter-GatewayTimezone"><code>GatewayTimezone</code></a>, <a href="#parameter-GatewayRegion"><code>GatewayRegion</code></a></td>
    <td></td>
    <td>Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.</td>
</tr>
<tr>
    <td><a href="#cancel_archival"><CopyableCode code="cancel_archival" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-TapeARN"><code>TapeARN</code></a></td>
    <td></td>
    <td>Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.</td>
</tr>
<tr>
    <td><a href="#cancel_retrieval"><CopyableCode code="cancel_retrieval" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-TapeARN"><code>TapeARN</code></a></td>
    <td></td>
    <td>Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.</td>
</tr>
<tr>
    <td><a href="#disable_gateway"><CopyableCode code="disable_gateway" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type. After a gateway is disabled, it cannot be enabled.</td>
</tr>
<tr>
    <td><a href="#join_domain"><CopyableCode code="join_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-Password"><code>Password</code></a></td>
    <td></td>
    <td>Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you will need to create this account ahead of time. To create the gateway's computer account in an organizational unit other than the default, you must specify the organizational unit when joining the domain.</td>
</tr>
<tr>
    <td><a href="#retrieve_tape_archive"><CopyableCode code="retrieve_tape_archive" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TapeARN"><code>TapeARN</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.</td>
</tr>
<tr>
    <td><a href="#retrieve_tape_recovery_point"><CopyableCode code="retrieve_tape_recovery_point" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TapeARN"><code>TapeARN</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.</td>
</tr>
<tr>
    <td><a href="#shutdown_gateway"><CopyableCode code="shutdown_gateway" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to shut down. You can call the DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the gateway.</td>
</tr>
<tr>
    <td><a href="#start_availability_monitor_test"><CopyableCode code="start_availability_monitor_test" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Start a test that verifies that the specified gateway is configured for High Availability monitoring in your host environment. This request only initiates the test and that a successful response only indicates that the test was started. It doesn't indicate that the test passed. For the status of the test, invoke the DescribeAvailabilityMonitorTest API. Starting this test will cause your gateway to go offline for a brief period.</td>
</tr>
<tr>
    <td><a href="#start_gateway"><CopyableCode code="start_gateway" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a></td>
    <td></td>
    <td>Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups. When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and check the status before making any additional API calls. For more information, see ActivateGateway. To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.</td>
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
    defaultValue="list_gateways"
    values={[
        { label: 'list_gateways', value: 'list_gateways' }
    ]}
>
<TabItem value="list_gateways">

Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response. If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.

```sql
SELECT
DeprecationDate,
Ec2InstanceId,
Ec2InstanceRegion,
GatewayARN,
GatewayId,
GatewayName,
GatewayOperationalState,
GatewayType,
HostEnvironment,
HostEnvironmentId,
SoftwareVersion
FROM aws.storagegateway.gateways
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_local_console_password"
    values={[
        { label: 'set_local_console_password', value: 'set_local_console_password' },
        { label: 'set_smb_guest_password', value: 'set_smb_guest_password' },
        { label: 'update_smb_local_groups', value: 'update_smb_local_groups' },
        { label: 'update_smb_security_strategy', value: 'update_smb_security_strategy' },
        { label: 'update_gateway_software_now', value: 'update_gateway_software_now' }
    ]}
>
<TabItem value="set_local_console_password">

Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.

```sql
UPDATE aws.storagegateway.gateways
SET 
GatewayARN = '{{ GatewayARN }}',
LocalConsolePassword = '{{ LocalConsolePassword }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
AND LocalConsolePassword = '{{ LocalConsolePassword }}' --required
RETURNING
GatewayARN;
```
</TabItem>
<TabItem value="set_smb_guest_password">

Sets the password for the guest user smbguest. The smbguest user is the user when the authentication method for the file share is set to GuestAccess. This operation only supported for S3 File Gateways

```sql
UPDATE aws.storagegateway.gateways
SET 
GatewayARN = '{{ GatewayARN }}',
Password = '{{ Password }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
AND Password = '{{ Password }}' --required
RETURNING
GatewayARN;
```
</TabItem>
<TabItem value="update_smb_local_groups">

Updates the list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.

```sql
UPDATE aws.storagegateway.gateways
SET 
GatewayARN = '{{ GatewayARN }}',
SMBLocalGroups = '{{ SMBLocalGroups }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
AND SMBLocalGroups = '{{ SMBLocalGroups }}' --required
RETURNING
GatewayARN;
```
</TabItem>
<TabItem value="update_smb_security_strategy">

Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only supported for Amazon S3 file gateways. For information about configuring this setting using the Amazon Web Services console, see Setting a security level for your gateway in the Amazon S3 File Gateway User Guide. A higher security strategy level can affect performance of the gateway.

```sql
UPDATE aws.storagegateway.gateways
SET 
GatewayARN = '{{ GatewayARN }}',
SMBSecurityStrategy = '{{ SMBSecurityStrategy }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
AND SMBSecurityStrategy = '{{ SMBSecurityStrategy }}' --required
RETURNING
GatewayARN;
```
</TabItem>
<TabItem value="update_gateway_software_now">

Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When you make this request, you get a 200 OK success response immediately. However, it might take some time for the update to complete. You can call DescribeGatewayInformation to verify the gateway is in the STATE_RUNNING state. A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see Customizing your Windows iSCSI settings and Customizing your Linux iSCSI settings, respectively.

```sql
UPDATE aws.storagegateway.gateways
SET 
GatewayARN = '{{ GatewayARN }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
RETURNING
GatewayARN;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gateway"
    values={[
        { label: 'delete_gateway', value: 'delete_gateway' }
    ]}
>
<TabItem value="delete_gateway">

Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer. After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment. You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription. If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the Storage Gateway detail page.

```sql
DELETE FROM aws.storagegateway.gateways
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_gateway"
    values={[
        { label: 'activate_gateway', value: 'activate_gateway' },
        { label: 'cancel_archival', value: 'cancel_archival' },
        { label: 'cancel_retrieval', value: 'cancel_retrieval' },
        { label: 'disable_gateway', value: 'disable_gateway' },
        { label: 'join_domain', value: 'join_domain' },
        { label: 'retrieve_tape_archive', value: 'retrieve_tape_archive' },
        { label: 'retrieve_tape_recovery_point', value: 'retrieve_tape_recovery_point' },
        { label: 'shutdown_gateway', value: 'shutdown_gateway' },
        { label: 'start_availability_monitor_test', value: 'start_availability_monitor_test' },
        { label: 'start_gateway', value: 'start_gateway' }
    ]}
>
<TabItem value="activate_gateway">

Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account. For more information, see UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

```sql
EXEC aws.storagegateway.gateways.activate_gateway 
@region='{{ region }}' --required 
@@json=
'{
"ActivationKey": "{{ ActivationKey }}", 
"GatewayName": "{{ GatewayName }}", 
"GatewayTimezone": "{{ GatewayTimezone }}", 
"GatewayRegion": "{{ GatewayRegion }}", 
"GatewayType": "{{ GatewayType }}", 
"TapeDriveType": "{{ TapeDriveType }}", 
"MediumChangerType": "{{ MediumChangerType }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="cancel_archival">

Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.

```sql
EXEC aws.storagegateway.gateways.cancel_archival 
@region='{{ region }}' --required 
@@json=
'{
"GatewayARN": "{{ GatewayARN }}", 
"TapeARN": "{{ TapeARN }}"
}'
;
```
</TabItem>
<TabItem value="cancel_retrieval">

Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.

```sql
EXEC aws.storagegateway.gateways.cancel_retrieval 
@region='{{ region }}' --required 
@@json=
'{
"GatewayARN": "{{ GatewayARN }}", 
"TapeARN": "{{ TapeARN }}"
}'
;
```
</TabItem>
<TabItem value="disable_gateway">

Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes. Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type. After a gateway is disabled, it cannot be enabled.

```sql
EXEC aws.storagegateway.gateways.disable_gateway 
@region='{{ region }}' --required 
@@json=
'{
"GatewayARN": "{{ GatewayARN }}"
}'
;
```
</TabItem>
<TabItem value="join_domain">

Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol. Joining a domain creates an Active Directory computer account in the default organizational unit, using the gateway's Gateway ID as the account name (for example, SGW-1234ADE). If your Active Directory environment requires that you pre-stage accounts to facilitate the join domain process, you will need to create this account ahead of time. To create the gateway's computer account in an organizational unit other than the default, you must specify the organizational unit when joining the domain.

```sql
EXEC aws.storagegateway.gateways.join_domain 
@region='{{ region }}' --required 
@@json=
'{
"GatewayARN": "{{ GatewayARN }}", 
"DomainName": "{{ DomainName }}", 
"OrganizationalUnit": "{{ OrganizationalUnit }}", 
"DomainControllers": "{{ DomainControllers }}", 
"TimeoutInSeconds": {{ TimeoutInSeconds }}, 
"UserName": "{{ UserName }}", 
"Password": "{{ Password }}"
}'
;
```
</TabItem>
<TabItem value="retrieve_tape_archive">

Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type. Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.

```sql
EXEC aws.storagegateway.gateways.retrieve_tape_archive 
@region='{{ region }}' --required 
@@json=
'{
"TapeARN": "{{ TapeARN }}", 
"GatewayARN": "{{ GatewayARN }}"
}'
;
```
</TabItem>
<TabItem value="retrieve_tape_recovery_point">

Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type. A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.

```sql
EXEC aws.storagegateway.gateways.retrieve_tape_recovery_point 
@region='{{ region }}' --required 
@@json=
'{
"TapeARN": "{{ TapeARN }}", 
"GatewayARN": "{{ GatewayARN }}"
}'
;
```
</TabItem>
<TabItem value="shutdown_gateway">

Shuts down a Tape Gateway or Volume Gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request. This API action cannot be used to shut down S3 File Gateway or FSx File Gateway. The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM. If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions. After the gateway is shutdown, you cannot call any other API except StartGateway, DescribeGatewayInformation, and ListGateways. For more information, see ActivateGateway. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken. When you make a shutdown request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to shut down. You can call the DescribeGatewayInformation API to check the status. For more information, see ActivateGateway. If do not intend to use the gateway again, you must delete the gateway (using DeleteGateway) to no longer pay software charges associated with the gateway.

```sql
EXEC aws.storagegateway.gateways.shutdown_gateway 
@region='{{ region }}' --required 
@@json=
'{
"GatewayARN": "{{ GatewayARN }}"
}'
;
```
</TabItem>
<TabItem value="start_availability_monitor_test">

Start a test that verifies that the specified gateway is configured for High Availability monitoring in your host environment. This request only initiates the test and that a successful response only indicates that the test was started. It doesn't indicate that the test passed. For the status of the test, invoke the DescribeAvailabilityMonitorTest API. Starting this test will cause your gateway to go offline for a brief period.

```sql
EXEC aws.storagegateway.gateways.start_availability_monitor_test 
@region='{{ region }}' --required 
@@json=
'{
"GatewayARN": "{{ GatewayARN }}"
}'
;
```
</TabItem>
<TabItem value="start_gateway">

Starts a gateway that you previously shut down (see ShutdownGateway). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups. When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call DescribeGatewayInformation and check the status before making any additional API calls. For more information, see ActivateGateway. To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.

```sql
EXEC aws.storagegateway.gateways.start_gateway 
@region='{{ region }}' --required 
@@json=
'{
"GatewayARN": "{{ GatewayARN }}"
}'
;
```
</TabItem>
</Tabs>
