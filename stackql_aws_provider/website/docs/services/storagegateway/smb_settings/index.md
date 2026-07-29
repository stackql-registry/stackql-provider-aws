--- 
title: smb_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - smb_settings
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

Creates, updates, deletes, gets or lists a <code>smb_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="smb_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.smb_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_smb_settings"
    values={[
        { label: 'describe_smb_settings', value: 'describe_smb_settings' }
    ]}
>
<TabItem value="describe_smb_settings">

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
    <td><CopyableCode code="active_directory_status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of a gateway that is a member of the Active Directory domain. This field is only used as part of a JoinDomain request. It is not affected by Active Directory connectivity changes that occur after the JoinDomain request succeeds. ACCESS_DENIED: Indicates that the JoinDomain operation failed due to an authentication error. DETACHED: Indicates that gateway is not joined to a domain. JOINED: Indicates that the gateway has successfully joined a domain. JOINING: Indicates that a JoinDomain operation is in progress. NETWORK_ERROR: Indicates that JoinDomain operation failed due to a network or connectivity error. TIMEOUT: Indicates that the JoinDomain operation failed because the operation didn't complete within the allotted time. UNKNOWN_ERROR: Indicates that the JoinDomain operation failed due to another type of error. (ACCESS_DENIED, DETACHED, JOINED, JOINING, NETWORK_ERROR, TIMEOUT, UNKNOWN_ERROR, INSUFFICIENT_PERMISSIONS)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that the gateway is joined to. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9&#93;+&#91;\\.-&#93;)+(&#91;a-zA-Z0-9&#93;)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="file_shares_visible" /></td>
    <td><code>boolean</code></td>
    <td>The shares on this gateway appear when listing shares. Only supported for S3 File Gateways.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="smb_guest_password_set" /></td>
    <td><code>boolean</code></td>
    <td>This value is true if a password for the guest user smbguest is set, otherwise false. Only supported for S3 File Gateways. Valid Values: true | false</td>
</tr>
<tr>
    <td><CopyableCode code="smb_local_groups" /></td>
    <td><code>object</code></td>
    <td>A list of Active Directory users and groups that have special permissions for SMB file shares on the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="smb_security_strategy" /></td>
    <td><code>string</code></td>
    <td>The type of security strategy that was specified for file gateway. ClientSpecified: If you choose this option, requests are established based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across different clients in your environment. Supported only for S3 File Gateway. MandatorySigning: If you choose this option, File Gateway only allows connections from SMBv2 or SMBv3 clients that have signing turned on. This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008, or later. MandatoryEncryption: If you choose this option, File Gateway only allows connections from SMBv3 clients that have encryption turned on. Both 256-bit and 128-bit algorithms are allowed. This option is recommended for environments that handle sensitive data. It works with SMB clients on Microsoft Windows 8, Windows Server 2012, or later. MandatoryEncryptionNoAes128: If you choose this option, File Gateway only allows connections from SMBv3 clients that use 256-bit AES encryption algorithms. 128-bit algorithms are not allowed. This option is recommended for environments that handle sensitive data. It works with SMB clients on Microsoft Windows 8, Windows Server 2012, or later. (ClientSpecified, MandatorySigning, MandatoryEncryption, MandatoryEncryptionNoAes128)</td>
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
    <td><a href="#describe_smb_settings"><CopyableCode code="describe_smb_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.</td>
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
    defaultValue="describe_smb_settings"
    values={[
        { label: 'describe_smb_settings', value: 'describe_smb_settings' }
    ]}
>
<TabItem value="describe_smb_settings">

Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.

```sql
SELECT
active_directory_status,
domain_name,
file_shares_visible,
gateway_arn,
smb_guest_password_set,
smb_local_groups,
smb_security_strategy
FROM aws.storagegateway.smb_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
