--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - evs
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.evs.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

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
    <td><CopyableCode code="checks" /></td>
    <td><code>array</code></td>
    <td>A check on the environment to identify instance health and VMware VCF licensing issues.</td>
</tr>
<tr>
    <td><CopyableCode code="connectivity_info" /></td>
    <td><code>object</code></td>
    <td>The connectivity configuration for the environment. Amazon EVS requires that you specify two route server peer IDs. During environment creation, the route server endpoints peer with the NSX uplink VLAN for connectivity to the NSX overlay network.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credentials" /></td>
    <td><code>array</code></td>
    <td>The VCF credentials that are stored as Amazon EVS managed secrets in Amazon Web Services Secrets Manager. Amazon EVS stores credentials that are needed to install vCenter Server, NSX, and SDDC Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is associated with the environment. (pattern: &lt;code&gt;arn:aws:evs:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:environment/&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the environment. (pattern: &lt;code&gt;(env-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_state" /></td>
    <td><code>string</code></td>
    <td>The state of an environment. (CREATING, CREATED, DELETING, DELETED, CREATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_status" /></td>
    <td><code>string</code></td>
    <td>Reports impaired functionality that stems from issues internal to the environment, such as impaired reachability. (PASSED, FAILED, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key ID that Amazon Web Services Secrets Manager uses to encrypt secrets that are associated with the environment. These secrets contain the VCF credentials that are needed to install vCenter Server, NSX, and SDDC Manager. By default, Amazon EVS use the Amazon Web Services Secrets Manager managed key aws/secretsmanager. You can also specify a customer managed key.</td>
</tr>
<tr>
    <td><CopyableCode code="license_info" /></td>
    <td><code>array</code></td>
    <td>The license information that Amazon EVS requires to create an environment. Amazon EVS requires two license keys: a VCF solution key and a vSAN license key. The VCF solution key must meet minimum core requirements, and the vSAN license key must meet minimum capacity requirements for your selected instance type. For information about minimum license requirements, see the VCF subscriptions section in the Amazon EVS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the environment was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="service_access_security_groups" /></td>
    <td><code>object</code></td>
    <td>The security groups that allow traffic between the Amazon EVS control plane and your VPC for service access. If a security group is not specified, Amazon EVS uses the default security group in your account for service access.</td>
</tr>
<tr>
    <td><CopyableCode code="service_access_subnet_id" /></td>
    <td><code>string</code></td>
    <td>The subnet that is used to establish connectivity between the Amazon EVS control plane and VPC. Amazon EVS uses this subnet to perform validations and create the environment. (pattern: &lt;code&gt;subnet-&#91;a-f0-9&#93;&#123;8&#125;(&#91;a-f0-9&#93;&#123;9&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td>The Broadcom Site ID that is associated with your Amazon EVS environment. Amazon EVS uses the Broadcom Site ID that you provide to meet Broadcom VCF license usage reporting requirements for Amazon EVS.</td>
</tr>
<tr>
    <td><CopyableCode code="state_details" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the environmentState of an environment.</td>
</tr>
<tr>
    <td><CopyableCode code="terms_accepted" /></td>
    <td><code>boolean</code></td>
    <td>Customer confirmation that the customer has purchased and will continue to maintain the required number of VCF software licenses to cover all physical processor cores in the Amazon EVS environment. Information about your VCF software in Amazon EVS will be shared with Broadcom to verify license compliance. Amazon EVS does not validate license keys. To validate license keys, visit the Broadcom support portal.</td>
</tr>
<tr>
    <td><CopyableCode code="vcf_hostnames" /></td>
    <td><code>object</code></td>
    <td>The DNS hostnames to be used by the VCF management appliances in your environment. For environment creation to be successful, each hostname entry must resolve to a domain name that you've registered in your DNS service of choice and configured in the DHCP option set of your VPC. DNS hostnames cannot be changed after environment creation has started.</td>
</tr>
<tr>
    <td><CopyableCode code="vcf_version" /></td>
    <td><code>string</code></td>
    <td>The VCF version of the environment. (VCF-5.2.1, VCF-5.2.2)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The VPC associated with the environment. (pattern: &lt;code&gt;vpc-&#91;a-f0-9&#93;&#123;8&#125;(&#91;a-f0-9&#93;&#123;9&#125;)?&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environments">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is associated with the environment. (pattern: &lt;code&gt;arn:aws:evs:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:environment/&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique ID for the environment. (pattern: &lt;code&gt;(env-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_state" /></td>
    <td><code>string</code></td>
    <td>The state of an environment. (CREATING, CREATED, DELETING, DELETED, CREATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_status" /></td>
    <td><code>string</code></td>
    <td>Reports impaired functionality that stems from issues internal to the environment, such as impaired reachability. (PASSED, FAILED, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the environment was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="vcf_version" /></td>
    <td><code>string</code></td>
    <td>The VCF version of the environment. (VCF-5.2.1, VCF-5.2.2)</td>
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
    <td><a href="#get_environment"><CopyableCode code="get_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the specified environment.</td>
</tr>
<tr>
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Amazon EVS environments in your Amazon Web Services account in the specified Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_environment"><CopyableCode code="create_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vpcId"><code>vpcId</code></a>, <a href="#parameter-serviceAccessSubnetId"><code>serviceAccessSubnetId</code></a>, <a href="#parameter-vcfVersion"><code>vcfVersion</code></a>, <a href="#parameter-termsAccepted"><code>termsAccepted</code></a>, <a href="#parameter-licenseInfo"><code>licenseInfo</code></a>, <a href="#parameter-initialVlans"><code>initialVlans</code></a>, <a href="#parameter-hosts"><code>hosts</code></a>, <a href="#parameter-connectivityInfo"><code>connectivityInfo</code></a>, <a href="#parameter-vcfHostnames"><code>vcfHostnames</code></a>, <a href="#parameter-siteId"><code>siteId</code></a></td>
    <td></td>
    <td>Creates an Amazon EVS environment that runs VCF software, such as SDDC Manager, NSX Manager, and vCenter Server. During environment creation, Amazon EVS performs validations on DNS settings, provisions VLAN subnets and hosts, and deploys the supplied version of VCF. It can take several hours to create an environment. After the deployment completes, you can configure VCF in the vSphere user interface according to your needs. When creating a new environment, the default ESX version for the selected VCF version will be used, you cannot choose a specific ESX version in CreateEnvironment action. When a host has been added with a specific ESX version, it can only be upgraded using vCenter Lifecycle Manager. You cannot use the dedicatedHostId and placementGroupId parameters together in the same CreateEnvironment action. This results in a ValidationException response.</td>
</tr>
<tr>
    <td><a href="#create_entitlement"><CopyableCode code="create_entitlement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-connectorId"><code>connectorId</code></a>, <a href="#parameter-entitlementType"><code>entitlementType</code></a>, <a href="#parameter-vmIds"><code>vmIds</code></a></td>
    <td></td>
    <td>Creates a Windows Server License entitlement for virtual machines in an Amazon EVS environment using the provided vCenter Server connector. This is an asynchronous operation. Amazon EVS validates the specified virtual machines before starting usage tracking.</td>
</tr>
<tr>
    <td><a href="#associate_eip_to_vlan"><CopyableCode code="associate_eip_to_vlan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-vlanName"><code>vlanName</code></a>, <a href="#parameter-allocationId"><code>allocationId</code></a></td>
    <td></td>
    <td>Associates an Elastic IP address with a public HCX VLAN. This operation is only allowed for public HCX VLANs at this time.</td>
</tr>
<tr>
    <td><a href="#disassociate_eip_from_vlan"><CopyableCode code="disassociate_eip_from_vlan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-vlanName"><code>vlanName</code></a>, <a href="#parameter-associationId"><code>associationId</code></a></td>
    <td></td>
    <td>Disassociates an Elastic IP address from a public HCX VLAN. This operation is only allowed for public HCX VLANs at this time.</td>
</tr>
<tr>
    <td><a href="#delete_entitlement"><CopyableCode code="delete_entitlement" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Windows Server License entitlement for virtual machines in an Amazon EVS environment. Deleting an entitlement stops usage tracking for the specified virtual machines.</td>
</tr>
<tr>
    <td><a href="#delete_environment"><CopyableCode code="delete_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon EVS environment. Amazon EVS environments will only be enabled for deletion once the hosts are deleted. You can delete hosts using the DeleteEnvironmentHost action. Environment deletion also deletes the associated Amazon EVS VLAN subnets and Amazon Web Services Secrets Manager secrets that Amazon EVS created. Amazon Web Services resources that you create are not deleted. These resources may continue to incur costs.</td>
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
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

Returns a description of the specified environment.

```sql
SELECT
checks,
connectivity_info,
created_at,
credentials,
environment_arn,
environment_id,
environment_name,
environment_state,
environment_status,
kms_key_id,
license_info,
modified_at,
service_access_security_groups,
service_access_subnet_id,
site_id,
state_details,
terms_accepted,
vcf_hostnames,
vcf_version,
vpc_id
FROM aws.evs.environments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environments">

Lists the Amazon EVS environments in your Amazon Web Services account in the specified Amazon Web Services Region.

```sql
SELECT
created_at,
environment_arn,
environment_id,
environment_name,
environment_state,
environment_status,
modified_at,
vcf_version
FROM aws.evs.environments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment"
    values={[
        { label: 'create_environment', value: 'create_environment' },
        { label: 'create_entitlement', value: 'create_entitlement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment">

Creates an Amazon EVS environment that runs VCF software, such as SDDC Manager, NSX Manager, and vCenter Server. During environment creation, Amazon EVS performs validations on DNS settings, provisions VLAN subnets and hosts, and deploys the supplied version of VCF. It can take several hours to create an environment. After the deployment completes, you can configure VCF in the vSphere user interface according to your needs. When creating a new environment, the default ESX version for the selected VCF version will be used, you cannot choose a specific ESX version in CreateEnvironment action. When a host has been added with a specific ESX version, it can only be upgraded using vCenter Lifecycle Manager. You cannot use the dedicatedHostId and placementGroupId parameters together in the same CreateEnvironment action. This results in a ValidationException response.

```sql
INSERT INTO aws.evs.environments (
clientToken,
environmentName,
kmsKeyId,
tags,
serviceAccessSecurityGroups,
vpcId,
serviceAccessSubnetId,
vcfVersion,
termsAccepted,
licenseInfo,
initialVlans,
hosts,
connectivityInfo,
vcfHostnames,
siteId,
region
)
SELECT 
'{{ clientToken }}',
'{{ environmentName }}',
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ serviceAccessSecurityGroups }}',
'{{ vpcId }}' /* required */,
'{{ serviceAccessSubnetId }}' /* required */,
'{{ vcfVersion }}' /* required */,
{{ termsAccepted }} /* required */,
'{{ licenseInfo }}' /* required */,
'{{ initialVlans }}' /* required */,
'{{ hosts }}' /* required */,
'{{ connectivityInfo }}' /* required */,
'{{ vcfHostnames }}' /* required */,
'{{ siteId }}' /* required */,
'{{ region }}'
RETURNING
environment
;
```
</TabItem>
<TabItem value="create_entitlement">

Creates a Windows Server License entitlement for virtual machines in an Amazon EVS environment using the provided vCenter Server connector. This is an asynchronous operation. Amazon EVS validates the specified virtual machines before starting usage tracking.

```sql
INSERT INTO aws.evs.environments (
clientToken,
environmentId,
connectorId,
entitlementType,
vmIds,
region
)
SELECT 
'{{ clientToken }}',
'{{ environmentId }}' /* required */,
'{{ connectorId }}' /* required */,
'{{ entitlementType }}' /* required */,
'{{ vmIds }}' /* required */,
'{{ region }}'
RETURNING
entitlements
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environments resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        This parameter is not used in Amazon EVS currently. If you supply input for this parameter, it will have no effect. A unique, case-sensitive identifier that you provide to ensure the idempotency of the entitlement creation request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency.
    - name: environmentName
      value: "{{ environmentName }}"
      description: |
        The name to give to your environment. The name can contain only alphanumeric characters (case-sensitive), hyphens, and underscores. It must start with an alphanumeric character, and can't be longer than 100 characters. The name must be unique within the Amazon Web Services Region and Amazon Web Services account that you're creating the environment in.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        A unique ID for the customer-managed KMS key that is used to encrypt the VCF credential pairs for SDDC Manager, NSX Manager, and vCenter appliances. These credentials are stored in Amazon Web Services Secrets Manager.
    - name: tags
      value: "{{ tags }}"
      description: |
        Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
    - name: serviceAccessSecurityGroups
      description: |
        The security group that controls communication between the Amazon EVS control plane and VPC. The default security group is used if a custom security group isn't specified. The security group should allow access to the following. TCP/UDP access to the DNS servers HTTPS/SSH access to the host management VLAN subnet HTTPS/SSH access to the Management VM VLAN subnet You should avoid modifying the security group rules after deployment, as this can break the persistent connection between the Amazon EVS control plane and VPC. This can cause future environment actions like adding or removing hosts to fail.
      value:
        securityGroups:
          - "{{ securityGroups }}"
    - name: vpcId
      value: "{{ vpcId }}"
      description: |
        A unique ID for the VPC that the environment is deployed inside. Amazon EVS requires that all VPC subnets exist in a single Availability Zone in a Region where the service is available. The VPC that you specify must have a valid DHCP option set with domain name, at least two DNS servers, and an NTP server. These settings are used to configure your VCF appliances and hosts. The VPC cannot be used with any other deployed Amazon EVS environment. Amazon EVS does not provide multi-VPC support for environments at this time. Amazon EVS does not support the following Amazon Web Services networking options for NSX overlay connectivity: cross-Region VPC peering, Amazon S3 gateway endpoints, or Amazon Web Services Direct Connect virtual private gateway associations. Ensure that you specify a VPC that is adequately sized to accommodate the Amazon EVS subnets.
    - name: serviceAccessSubnetId
      value: "{{ serviceAccessSubnetId }}"
      description: |
        The subnet that is used to establish connectivity between the Amazon EVS control plane and VPC. Amazon EVS uses this subnet to validate mandatory DNS records for your VCF appliances and hosts and create the environment.
    - name: vcfVersion
      value: "{{ vcfVersion }}"
      description: |
        The VCF version to use for the environment.
      valid_values: ['VCF-5.2.1', 'VCF-5.2.2']
    - name: termsAccepted
      value: {{ termsAccepted }}
      description: |
        Customer confirmation that the customer has purchased and will continue to maintain the required number of VCF software licenses to cover all physical processor cores in the Amazon EVS environment. Information about your VCF software in Amazon EVS will be shared with Broadcom to verify license compliance. Amazon EVS does not validate license keys. To validate license keys, visit the Broadcom support portal.
    - name: licenseInfo
      description: |
        The license information that Amazon EVS requires to create an environment. Amazon EVS requires two license keys: a VCF solution key and a vSAN license key. The VCF solution key must meet minimum core requirements, and the vSAN license key must meet minimum capacity requirements for your selected instance type. For information about minimum license requirements, see the VCF subscriptions section in the Amazon EVS User Guide. VCF licenses can be used for only one Amazon EVS environment. Amazon EVS does not support reuse of VCF licenses for multiple environments. VCF license information can be retrieved from the Broadcom portal.
      value:
        - solutionKey: "{{ solutionKey }}"
          vsanKey: "{{ vsanKey }}"
    - name: initialVlans
      description: |
        The initial VLAN subnets for the Amazon EVS environment. For each Amazon EVS VLAN subnet, you must specify a non-overlapping CIDR block. Amazon EVS VLAN subnets have a minimum CIDR block size of /28 and a maximum size of /24.
      value:
        vmkManagement:
          cidr: "{{ cidr }}"
        vmManagement:
          cidr: "{{ cidr }}"
        vMotion:
          cidr: "{{ cidr }}"
        vSan:
          cidr: "{{ cidr }}"
        vTep:
          cidr: "{{ cidr }}"
        edgeVTep:
          cidr: "{{ cidr }}"
        nsxUplink:
          cidr: "{{ cidr }}"
        hcx:
          cidr: "{{ cidr }}"
        expansionVlan1:
          cidr: "{{ cidr }}"
        expansionVlan2:
          cidr: "{{ cidr }}"
        isHcxPublic: {{ isHcxPublic }}
        hcxNetworkAclId: "{{ hcxNetworkAclId }}"
    - name: hosts
      description: |
        The ESX hosts to add to the environment. Amazon EVS requires that you provide details for a minimum of 4 hosts during environment creation. For each host, you must provide the desired hostname, EC2 SSH keypair name, and EC2 instance type. Optionally, you can also provide a partition or cluster placement group to use, or use Amazon EC2 Dedicated Hosts.
      value:
        - hostName: "{{ hostName }}"
          keyName: "{{ keyName }}"
          instanceType: "{{ instanceType }}"
          placementGroupId: "{{ placementGroupId }}"
          dedicatedHostId: "{{ dedicatedHostId }}"
    - name: connectivityInfo
      description: |
        The connectivity configuration for the environment. Amazon EVS requires that you specify two route server peer IDs. During environment creation, the route server endpoints peer with the NSX edges over the NSX uplink subnet, providing BGP-based dynamic routing for overlay networks.
      value:
        privateRouteServerPeerings:
          - "{{ privateRouteServerPeerings }}"
    - name: vcfHostnames
      description: |
        The DNS hostnames for the virtual machines that host the VCF management appliances. Amazon EVS requires that you provide DNS hostnames for the following appliances: vCenter, NSX Manager, SDDC Manager, and Cloud Builder.
      value:
        vCenter: "{{ vCenter }}"
        nsx: "{{ nsx }}"
        nsxManager1: "{{ nsxManager1 }}"
        nsxManager2: "{{ nsxManager2 }}"
        nsxManager3: "{{ nsxManager3 }}"
        nsxEdge1: "{{ nsxEdge1 }}"
        nsxEdge2: "{{ nsxEdge2 }}"
        sddcManager: "{{ sddcManager }}"
        cloudBuilder: "{{ cloudBuilder }}"
    - name: siteId
      value: "{{ siteId }}"
      description: |
        The Broadcom Site ID that is allocated to you as part of your electronic software delivery. This ID allows customer access to the Broadcom portal, and is provided to you by Broadcom at the close of your software contract or contract renewal. Amazon EVS uses the Broadcom Site ID that you provide to meet Broadcom VCF license usage reporting requirements for Amazon EVS.
    - name: environmentId
      value: "{{ environmentId }}"
      description: |
        A unique ID for the environment to create the entitlement in.
    - name: connectorId
      value: "{{ connectorId }}"
      description: |
        A unique ID for the connector associated with the entitlement.
    - name: entitlementType
      value: "{{ entitlementType }}"
      description: |
        The type of entitlement to create.
      valid_values: ['WINDOWS_SERVER']
    - name: vmIds
      value:
        - "{{ vmIds }}"
      description: |
        The list of VMware vSphere virtual machine managed object IDs to create entitlements for.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_eip_to_vlan"
    values={[
        { label: 'associate_eip_to_vlan', value: 'associate_eip_to_vlan' },
        { label: 'disassociate_eip_from_vlan', value: 'disassociate_eip_from_vlan' }
    ]}
>
<TabItem value="associate_eip_to_vlan">

Associates an Elastic IP address with a public HCX VLAN. This operation is only allowed for public HCX VLANs at this time.

```sql
UPDATE aws.evs.environments
SET 
clientToken = '{{ clientToken }}',
environmentId = '{{ environmentId }}',
vlanName = '{{ vlanName }}',
allocationId = '{{ allocationId }}'
WHERE 
region = '{{ region }}' --required
AND environmentId = '{{ environmentId }}' --required
AND vlanName = '{{ vlanName }}' --required
AND allocationId = '{{ allocationId }}' --required
RETURNING
vlan;
```
</TabItem>
<TabItem value="disassociate_eip_from_vlan">

Disassociates an Elastic IP address from a public HCX VLAN. This operation is only allowed for public HCX VLANs at this time.

```sql
UPDATE aws.evs.environments
SET 
clientToken = '{{ clientToken }}',
environmentId = '{{ environmentId }}',
vlanName = '{{ vlanName }}',
associationId = '{{ associationId }}'
WHERE 
region = '{{ region }}' --required
AND environmentId = '{{ environmentId }}' --required
AND vlanName = '{{ vlanName }}' --required
AND associationId = '{{ associationId }}' --required
RETURNING
vlan;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_entitlement"
    values={[
        { label: 'delete_entitlement', value: 'delete_entitlement' },
        { label: 'delete_environment', value: 'delete_environment' }
    ]}
>
<TabItem value="delete_entitlement">

Deletes a Windows Server License entitlement for virtual machines in an Amazon EVS environment. Deleting an entitlement stops usage tracking for the specified virtual machines.

```sql
DELETE FROM aws.evs.environments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_environment">

Deletes an Amazon EVS environment. Amazon EVS environments will only be enabled for deletion once the hosts are deleted. You can delete hosts using the DeleteEnvironmentHost action. Environment deletion also deletes the associated Amazon EVS VLAN subnets and Amazon Web Services Secrets Manager secrets that Amazon EVS created. Amazon Web Services resources that you create are not deleted. These resources may continue to incur costs.

```sql
DELETE FROM aws.evs.environments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
