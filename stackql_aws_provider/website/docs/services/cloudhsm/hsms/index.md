--- 
title: hsms
hide_title: false
hide_table_of_contents: false
keywords:
  - hsms
  - cloudhsm
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

Creates, updates, deletes, gets or lists a <code>hsms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hsms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudhsm.hsms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hsm"
    values={[
        { label: 'describe_hsm', value: 'describe_hsm' }
    ]}
>
<TabItem value="describe_hsm">

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
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone that the HSM is in. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EniId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the elastic network interface (ENI) attached to the HSM. (pattern: &lt;code&gt;eni-&#91;0-9a-f&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EniIp" /></td>
    <td><code>string</code></td>
    <td>The IP address assigned to the HSM's ENI. (pattern: &lt;code&gt;\d&#123;1,3&#125;\.\d&#123;1,3&#125;\.\d&#123;1,3&#125;\.\d&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HsmArn" /></td>
    <td><code>string</code></td>
    <td>An ARN that identifies an HSM. (pattern: &lt;code&gt;arn:aws(-iso)?:cloudhsm:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:hsm-&#91;0-9a-f&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HsmType" /></td>
    <td><code>string</code></td>
    <td>The HSM model type. (pattern: &lt;code&gt;&#91;\w :+=./\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role assigned to the HSM. (pattern: &lt;code&gt;arn:aws(-iso)?:iam::&#91;0-9&#93;&#123;12&#125;:role/&#91;a-zA-Z0-9_\+=,\.\-@&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Partitions" /></td>
    <td><code>array</code></td>
    <td>The list of partitions on the HSM.</td>
</tr>
<tr>
    <td><CopyableCode code="SerialNumber" /></td>
    <td><code>string</code></td>
    <td>The serial number of the HSM. (pattern: &lt;code&gt;\d&#123;1,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServerCertLastUpdated" /></td>
    <td><code>string</code></td>
    <td>The date and time that the server certificate was last updated. (pattern: &lt;code&gt;\d*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServerCertUri" /></td>
    <td><code>string</code></td>
    <td>The URI of the certificate server. (pattern: &lt;code&gt;&#91;\w :+=./\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SoftwareVersion" /></td>
    <td><code>string</code></td>
    <td>The HSM software version. (pattern: &lt;code&gt;&#91;\w :+=./\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SshKeyLastUpdated" /></td>
    <td><code>string</code></td>
    <td>The date and time that the SSH key was last updated. (pattern: &lt;code&gt;\d*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SshPublicKey" /></td>
    <td><code>string</code></td>
    <td>The public SSH key. (pattern: &lt;code&gt;&#91;a-zA-Z0-9+/= ._:\\@-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the HSM. (PENDING, RUNNING, UPDATING, SUSPENDED, TERMINATING, TERMINATED, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusDetails" /></td>
    <td><code>string</code></td>
    <td>Contains additional information about the status of the HSM. (pattern: &lt;code&gt;&#91;\w :+=./\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the subnet that the HSM is in. (pattern: &lt;code&gt;subnet-&#91;0-9a-f&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionEndDate" /></td>
    <td><code>string</code></td>
    <td>The subscription end date. (pattern: &lt;code&gt;\d*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionStartDate" /></td>
    <td><code>string</code></td>
    <td>The subscription start date. (pattern: &lt;code&gt;\d*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of subscription for the HSM. PRODUCTION - The HSM is being used in a production environment. TRIAL - The HSM is being used in a product trial. (PRODUCTION)</td>
</tr>
<tr>
    <td><CopyableCode code="VendorName" /></td>
    <td><code>string</code></td>
    <td>The name of the HSM vendor. (pattern: &lt;code&gt;&#91;\w :+=./\\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the VPC that the HSM is in. (pattern: &lt;code&gt;vpc-&#91;0-9a-f&#93;&#123;8&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_hsm"><CopyableCode code="describe_hsm" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.</td>
</tr>
<tr>
    <td><a href="#create_hsm"><CopyableCode code="create_hsm" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-SshKey"><code>SshKey</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a>, <a href="#parameter-SubscriptionType"><code>SubscriptionType</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates an uninitialized HSM instance. There is an upfront fee charged for each HSM instance that you create with the CreateHsm operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the DeleteHsm operation, go to the AWS Support Center, create a new case, and select Account and Billing Support. It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the DescribeHsm operation. The HSM is ready to be initialized when the status changes to RUNNING.</td>
</tr>
<tr>
    <td><a href="#modify_hsm"><CopyableCode code="modify_hsm" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HsmArn"><code>HsmArn</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies an HSM. This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.</td>
</tr>
<tr>
    <td><a href="#delete_hsm"><CopyableCode code="delete_hsm" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.</td>
</tr>
<tr>
    <td><a href="#list_hsms"><CopyableCode code="list_hsms" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves the identifiers of all of the HSMs provisioned for the current customer. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListHsms to retrieve the next set of items.</td>
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
    defaultValue="describe_hsm"
    values={[
        { label: 'describe_hsm', value: 'describe_hsm' }
    ]}
>
<TabItem value="describe_hsm">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.

```sql
SELECT
AvailabilityZone,
EniId,
EniIp,
HsmArn,
HsmType,
IamRoleArn,
Partitions,
SerialNumber,
ServerCertLastUpdated,
ServerCertUri,
SoftwareVersion,
SshKeyLastUpdated,
SshPublicKey,
Status,
StatusDetails,
SubnetId,
SubscriptionEndDate,
SubscriptionStartDate,
SubscriptionType,
VendorName,
VpcId
FROM aws.cloudhsm.hsms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hsm"
    values={[
        { label: 'create_hsm', value: 'create_hsm' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hsm">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Creates an uninitialized HSM instance. There is an upfront fee charged for each HSM instance that you create with the CreateHsm operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the DeleteHsm operation, go to the AWS Support Center, create a new case, and select Account and Billing Support. It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the DescribeHsm operation. The HSM is ready to be initialized when the status changes to RUNNING.

```sql
INSERT INTO aws.cloudhsm.hsms (
SubnetId,
SshKey,
EniIp,
IamRoleArn,
ExternalId,
SubscriptionType,
ClientToken,
SyslogIp,
region
)
SELECT 
'{{ SubnetId }}' /* required */,
'{{ SshKey }}' /* required */,
'{{ EniIp }}',
'{{ IamRoleArn }}' /* required */,
'{{ ExternalId }}',
'{{ SubscriptionType }}' /* required */,
'{{ ClientToken }}',
'{{ SyslogIp }}',
'{{ region }}'
RETURNING
HsmArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hsms
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hsms resource.
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: |
        The identifier of the subnet in your VPC in which to place the HSM.
    - name: SshKey
      value: "{{ SshKey }}"
      description: |
        The SSH public key to install on the HSM.
    - name: EniIp
      value: "{{ EniIp }}"
      description: |
        The IP address to assign to the HSM's ENI. If an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the subnet.
    - name: IamRoleArn
      value: "{{ IamRoleArn }}"
      description: |
        The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on your behalf.
    - name: ExternalId
      value: "{{ ExternalId }}"
      description: |
        The external ID from IamRoleArn, if present.
    - name: SubscriptionType
      value: "{{ SubscriptionType }}"
      description: |
        Specifies the type of subscription for the HSM. PRODUCTION - The HSM is being used in a production environment. TRIAL - The HSM is being used in a product trial.
      valid_values: ['PRODUCTION']
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A user-defined token to ensure idempotence. Subsequent calls to this operation with the same token will be ignored.
    - name: SyslogIp
      value: "{{ SyslogIp }}"
      description: |
        The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_hsm"
    values={[
        { label: 'modify_hsm', value: 'modify_hsm' }
    ]}
>
<TabItem value="modify_hsm">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Modifies an HSM. This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.

```sql
UPDATE aws.cloudhsm.hsms
SET 
HsmArn = '{{ HsmArn }}',
SubnetId = '{{ SubnetId }}',
EniIp = '{{ EniIp }}',
IamRoleArn = '{{ IamRoleArn }}',
ExternalId = '{{ ExternalId }}',
SyslogIp = '{{ SyslogIp }}'
WHERE 
region = '{{ region }}' --required
AND HsmArn = '{{ HsmArn }}' --required
RETURNING
HsmArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hsm"
    values={[
        { label: 'delete_hsm', value: 'delete_hsm' }
    ]}
>
<TabItem value="delete_hsm">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.

```sql
DELETE FROM aws.cloudhsm.hsms
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_hsms"
    values={[
        { label: 'list_hsms', value: 'list_hsms' }
    ]}
>
<TabItem value="list_hsms">

This is documentation for AWS CloudHSM Classic. For more information, see AWS CloudHSM Classic FAQs, the AWS CloudHSM Classic User Guide, and the AWS CloudHSM Classic API Reference. For information about the current version of AWS CloudHSM, see AWS CloudHSM, the AWS CloudHSM User Guide, and the AWS CloudHSM API Reference. Retrieves the identifiers of all of the HSMs provisioned for the current customer. This operation supports pagination with the use of the NextToken member. If more results are available, the NextToken member of the response contains a token that you pass in the next call to ListHsms to retrieve the next set of items.

```sql
EXEC aws.cloudhsm.hsms.list_hsms 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
