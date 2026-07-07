--- 
title: workforces
hide_title: false
hide_table_of_contents: false
keywords:
  - workforces
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>workforces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workforces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.workforces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workforce"
    values={[
        { label: 'describe_workforce', value: 'describe_workforce' },
        { label: 'list_workforces', value: 'list_workforces' }
    ]}
>
<TabItem value="describe_workforce">

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
    <td><CopyableCode code="CognitoConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of an Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the workforce is created.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason your workforce failed. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type you specify - either IPv4 only or dualstack (IPv4 and IPv6) - to support your labeling workforce. (ipv4, dualstack)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date that UpdateWorkforce was used to successfully add one or more IP address ranges (CIDRs) to a private workforce's allow list.</td>
</tr>
<tr>
    <td><CopyableCode code="OidcConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of an OIDC Identity Provider (IdP) private workforce.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceIpConfig" /></td>
    <td><code>object</code></td>
    <td>A list of IP address ranges (CIDRs). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to log in to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of your workforce. (Initializing, Updating, Deleting, Failed, Active)</td>
</tr>
<tr>
    <td><CopyableCode code="SubDomain" /></td>
    <td><code>string</code></td>
    <td>The subdomain for your OIDC Identity Provider.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkforceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the private workforce. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:workforce/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkforceName" /></td>
    <td><code>string</code></td>
    <td>The name of the private workforce. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;a-zA-Z0-9\-&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkforceVpcConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of a VPC workforce.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workforces">

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
    <td><CopyableCode code="CognitoConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of an Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the workforce is created.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason your workforce failed. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type you specify - either IPv4 only or dualstack (IPv4 and IPv6) - to support your labeling workforce. (ipv4, dualstack)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent date that UpdateWorkforce was used to successfully add one or more IP address ranges (CIDRs) to a private workforce's allow list.</td>
</tr>
<tr>
    <td><CopyableCode code="OidcConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of an OIDC Identity Provider (IdP) private workforce.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceIpConfig" /></td>
    <td><code>object</code></td>
    <td>A list of IP address ranges (CIDRs). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to log in to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of your workforce. (Initializing, Updating, Deleting, Failed, Active)</td>
</tr>
<tr>
    <td><CopyableCode code="SubDomain" /></td>
    <td><code>string</code></td>
    <td>The subdomain for your OIDC Identity Provider.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkforceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the private workforce. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:workforce/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkforceName" /></td>
    <td><code>string</code></td>
    <td>The name of the private workforce. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;a-zA-Z0-9\-&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkforceVpcConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of a VPC workforce.</td>
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
    <td><a href="#describe_workforce"><CopyableCode code="describe_workforce" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (CIDRs). Allowable IP address ranges are the IP addresses that workers can use to access tasks. This operation applies only to private workforces.</td>
</tr>
<tr>
    <td><a href="#list_workforces"><CopyableCode code="list_workforces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only have one private workforce per Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_workforce"><CopyableCode code="create_workforce" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkforceName"><code>WorkforceName</code></a></td>
    <td></td>
    <td>Use this operation to create a workforce. This operation will return an error if a workforce already exists in the Amazon Web Services Region that you specify. You can only create one workforce in each Amazon Web Services Region per Amazon Web Services account. If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use the DeleteWorkforce API operation to delete the existing workforce and then use CreateWorkforce to create a new workforce. To create a private workforce using Amazon Cognito, you must specify a Cognito user pool in CognitoConfig. You can also create an Amazon Cognito workforce using the Amazon SageMaker console. For more information, see Create a Private Workforce (Amazon Cognito). To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP configuration in OidcConfig. Your OIDC IdP must support groups because groups are used by Ground Truth and Amazon A2I to create work teams. For more information, see Create a Private Workforce (OIDC IdP).</td>
</tr>
<tr>
    <td><a href="#update_workforce"><CopyableCode code="update_workforce" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkforceName"><code>WorkforceName</code></a></td>
    <td></td>
    <td>Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration. The worker portal is now supported in VPC and public internet. Use SourceIpConfig to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten CIDRs. By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a Not Found error message on the worker portal. To restrict public internet access for all workers, configure the SourceIpConfig CIDR value. For example, when using SourceIpConfig with an IpAddressType of IPv4, you can restrict access to the IPv4 CIDR block "10.0.0.0/16". When using an IpAddressType of dualstack, you can specify both the IPv4 and IPv6 CIDR blocks, such as "10.0.0.0/16" for IPv4 only, "2001:db8:1234:1a00::/56" for IPv6 only, or "10.0.0.0/16" and "2001:db8:1234:1a00::/56" for dual stack. Amazon SageMaker does not support Source Ip restriction for worker portals in VPC. Use OidcConfig to update the configuration of a workforce created using your own OIDC IdP. You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the DeleteWorkteam operation. After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the DescribeWorkforce operation. This operation only applies to private workforces.</td>
</tr>
<tr>
    <td><a href="#delete_workforce"><CopyableCode code="delete_workforce" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to delete a workforce. If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use this operation to delete the existing workforce and then use CreateWorkforce to create a new workforce. If a private workforce contains one or more work teams, you must use the DeleteWorkteam operation to delete all work teams before you delete the workforce. If you try to delete a workforce that contains one or more work teams, you will receive a ResourceInUse error.</td>
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
    defaultValue="describe_workforce"
    values={[
        { label: 'describe_workforce', value: 'describe_workforce' },
        { label: 'list_workforces', value: 'list_workforces' }
    ]}
>
<TabItem value="describe_workforce">

Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (CIDRs). Allowable IP address ranges are the IP addresses that workers can use to access tasks. This operation applies only to private workforces.

```sql
SELECT
CognitoConfig,
CreateDate,
FailureReason,
IpAddressType,
LastUpdatedDate,
OidcConfig,
SourceIpConfig,
Status,
SubDomain,
WorkforceArn,
WorkforceName,
WorkforceVpcConfig
FROM aws.sagemaker.workforces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workforces">

Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only have one private workforce per Amazon Web Services Region.

```sql
SELECT
CognitoConfig,
CreateDate,
FailureReason,
IpAddressType,
LastUpdatedDate,
OidcConfig,
SourceIpConfig,
Status,
SubDomain,
WorkforceArn,
WorkforceName,
WorkforceVpcConfig
FROM aws.sagemaker.workforces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workforce"
    values={[
        { label: 'create_workforce', value: 'create_workforce' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workforce">

Use this operation to create a workforce. This operation will return an error if a workforce already exists in the Amazon Web Services Region that you specify. You can only create one workforce in each Amazon Web Services Region per Amazon Web Services account. If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use the DeleteWorkforce API operation to delete the existing workforce and then use CreateWorkforce to create a new workforce. To create a private workforce using Amazon Cognito, you must specify a Cognito user pool in CognitoConfig. You can also create an Amazon Cognito workforce using the Amazon SageMaker console. For more information, see Create a Private Workforce (Amazon Cognito). To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP configuration in OidcConfig. Your OIDC IdP must support groups because groups are used by Ground Truth and Amazon A2I to create work teams. For more information, see Create a Private Workforce (OIDC IdP).

```sql
INSERT INTO aws.sagemaker.workforces (
CognitoConfig,
OidcConfig,
SourceIpConfig,
WorkforceName,
Tags,
WorkforceVpcConfig,
IpAddressType,
region
)
SELECT 
'{{ CognitoConfig }}',
'{{ OidcConfig }}',
'{{ SourceIpConfig }}',
'{{ WorkforceName }}' /* required */,
'{{ Tags }}',
'{{ WorkforceVpcConfig }}',
'{{ IpAddressType }}',
'{{ region }}'
RETURNING
WorkforceArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workforces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workforces resource.
    - name: CognitoConfig
      description: |
        Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool. Do not use OidcConfig if you specify values for CognitoConfig.
      value:
        UserPool: "{{ UserPool }}"
        ClientId: "{{ ClientId }}"
    - name: OidcConfig
      description: |
        Use this parameter to configure a private workforce using your own OIDC Identity Provider. Do not use CognitoConfig if you specify values for OidcConfig.
      value:
        ClientId: "{{ ClientId }}"
        ClientSecret: "{{ ClientSecret }}"
        Issuer: "{{ Issuer }}"
        AuthorizationEndpoint: "{{ AuthorizationEndpoint }}"
        TokenEndpoint: "{{ TokenEndpoint }}"
        UserInfoEndpoint: "{{ UserInfoEndpoint }}"
        LogoutEndpoint: "{{ LogoutEndpoint }}"
        JwksUri: "{{ JwksUri }}"
        Scope: "{{ Scope }}"
        AuthenticationRequestExtraParams: "{{ AuthenticationRequestExtraParams }}"
    - name: SourceIpConfig
      description: |
        A list of IP address ranges (CIDRs). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to log in to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses.
      value:
        Cidrs:
          - "{{ Cidrs }}"
    - name: WorkforceName
      value: "{{ WorkforceName }}"
      description: |
        The name of the private workforce.
    - name: Tags
      description: |
        An array of key-value pairs that contain metadata to help you categorize and organize our workforce. Each tag consists of a key and a value, both of which you define.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: WorkforceVpcConfig
      description: |
        Use this parameter to configure a workforce using VPC.
      value:
        VpcId: "{{ VpcId }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Subnets:
          - "{{ Subnets }}"
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: |
        Use this parameter to specify whether you want IPv4 only or dualstack (IPv4 and IPv6) to support your labeling workforce.
      valid_values: ['ipv4', 'dualstack']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workforce"
    values={[
        { label: 'update_workforce', value: 'update_workforce' }
    ]}
>
<TabItem value="update_workforce">

Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration. The worker portal is now supported in VPC and public internet. Use SourceIpConfig to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten CIDRs. By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a Not Found error message on the worker portal. To restrict public internet access for all workers, configure the SourceIpConfig CIDR value. For example, when using SourceIpConfig with an IpAddressType of IPv4, you can restrict access to the IPv4 CIDR block "10.0.0.0/16". When using an IpAddressType of dualstack, you can specify both the IPv4 and IPv6 CIDR blocks, such as "10.0.0.0/16" for IPv4 only, "2001:db8:1234:1a00::/56" for IPv6 only, or "10.0.0.0/16" and "2001:db8:1234:1a00::/56" for dual stack. Amazon SageMaker does not support Source Ip restriction for worker portals in VPC. Use OidcConfig to update the configuration of a workforce created using your own OIDC IdP. You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the DeleteWorkteam operation. After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the DescribeWorkforce operation. This operation only applies to private workforces.

```sql
UPDATE aws.sagemaker.workforces
SET 
WorkforceName = '{{ WorkforceName }}',
SourceIpConfig = '{{ SourceIpConfig }}',
OidcConfig = '{{ OidcConfig }}',
WorkforceVpcConfig = '{{ WorkforceVpcConfig }}',
IpAddressType = '{{ IpAddressType }}'
WHERE 
region = '{{ region }}' --required
AND WorkforceName = '{{ WorkforceName }}' --required
RETURNING
Workforce;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workforce"
    values={[
        { label: 'delete_workforce', value: 'delete_workforce' }
    ]}
>
<TabItem value="delete_workforce">

Use this operation to delete a workforce. If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use this operation to delete the existing workforce and then use CreateWorkforce to create a new workforce. If a private workforce contains one or more work teams, you must use the DeleteWorkteam operation to delete all work teams before you delete the workforce. If you try to delete a workforce that contains one or more work teams, you will receive a ResourceInUse error.

```sql
DELETE FROM aws.sagemaker.workforces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
