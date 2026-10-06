--- 
title: custom_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_policies
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

Creates, updates, deletes, gets or lists a <code>custom_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.custom_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#simulate_custom_policy"><CopyableCode code="simulate_custom_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-PolicyInputList"><code>PolicyInputList</code></a>, <a href="#parameter-ActionNames"><code>ActionNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PermissionsBoundaryPolicyInputList"><code>PermissionsBoundaryPolicyInputList</code></a>, <a href="#parameter-OrderedOrganizationPolicyInputList"><code>OrderedOrganizationPolicyInputList</code></a>, <a href="#parameter-ResourceArns"><code>ResourceArns</code></a>, <a href="#parameter-ResourcePolicy"><code>ResourcePolicy</code></a>, <a href="#parameter-ResourceOwner"><code>ResourceOwner</code></a>, <a href="#parameter-CallerArn"><code>CallerArn</code></a>, <a href="#parameter-ContextEntries"><code>ContextEntries</code></a>, <a href="#parameter-ResourceHandlingOption"><code>ResourceHandlingOption</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The policies are provided as strings. The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations. You can simulate resources that don't exist in your account. If you want to simulate existing policies that are attached to an IAM user, group, or role, use SimulatePrincipalPolicy instead. Context keys are variables that are maintained by Amazon Web Services and its services and which provide details about the context of an API query request. You can use the Condition element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use GetContextKeysForCustomPolicy. If the output is long, you can use MaxItems and Marker parameters to paginate the results. The IAM policy simulator evaluates statements in identity-based policies, service control policies (SCPs) including their condition keys and resource scoping, and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see Testing IAM policies with the IAM policy simulator in the IAM User Guide.</td>
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
<tr id="parameter-ActionNames">
    <td><CopyableCode code="ActionNames" /></td>
    <td><code>array</code></td>
    <td>A list of names of API operations to evaluate in the simulation. Each operation is evaluated against each resource. Each operation must include the service identifier, such as iam:CreateUser. This operation does not support using wildcards (*) in an action name.</td>
</tr>
<tr id="parameter-PolicyInputList">
    <td><CopyableCode code="PolicyInputList" /></td>
    <td><code>array</code></td>
    <td>A list of policy documents to include in the simulation. Each document is specified as a string containing the complete, valid JSON text of an IAM policy. Do not include any resource-based policies in this parameter. Any resource-based policy must be submitted with the ResourcePolicy parameter. The policies cannot be "scope-down" policies, such as you could include in a call to GetFederationToken or one of the AssumeRole API operations. In other words, do not use policies designed to restrict what a user can do while using the temporary credentials. The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see IAM and STS character quotas. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CallerArn">
    <td><CopyableCode code="CallerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM user, group, or role that you want to use as the simulated caller of the API operations. CallerArn is required if you include a ResourcePolicy so that the policy's Principal element has a value to use in evaluating the policy. You cannot specify the ARN of an assumed role, federated user, or a service principal.</td>
</tr>
<tr id="parameter-ContextEntries">
    <td><CopyableCode code="ContextEntries" /></td>
    <td><code>array</code></td>
    <td>A list of context keys and corresponding values for the simulation to use. Whenever a context key is evaluated in one of the simulated IAM permissions policies, the corresponding value is supplied.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true, and Marker contains a value to include in the subsequent call that tells the service where to continue from.</td>
</tr>
<tr id="parameter-OrderedOrganizationPolicyInputList">
    <td><CopyableCode code="OrderedOrganizationPolicyInputList" /></td>
    <td><code>array</code></td>
    <td>An ordered list of service control policies (SCPs) to include in the simulation. Each element represents one level of an Organizations hierarchy, from the organization root to the account. The simulator evaluates SCPs in the order that you provide, consistent with how Organizations enforces SCPs. The first element must represent the organization root, and the last element must represent the account. Any elements between them represent organizational units (OUs) in descending order. Use this parameter to simulate the effect of an SCP hierarchy without calling SimulatePrincipalPolicy.</td>
</tr>
<tr id="parameter-PermissionsBoundaryPolicyInputList">
    <td><CopyableCode code="PermissionsBoundaryPolicyInputList" /></td>
    <td><code>array</code></td>
    <td>The IAM permissions boundary policy to simulate. The permissions boundary sets the maximum permissions that an IAM entity can have. You can input only one permissions boundary when you pass a policy to this operation. For more information about permissions boundaries, see Permissions boundaries for IAM entities in the IAM User Guide. The policy input is specified as a string that contains the complete, valid JSON text of a permissions boundary policy. The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see IAM and STS character quotas. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-ResourceArns">
    <td><CopyableCode code="ResourceArns" /></td>
    <td><code>array</code></td>
    <td>A list of ARNs of Amazon Web Services resources to include in the simulation. If this parameter is not provided, then the value defaults to * (all resources). Each API in the ActionNames parameter is evaluated for each resource in this list. The simulation determines the access result (allowed or denied) of each combination and reports it in the response. You can simulate resources that don't exist in your account. The simulation does not automatically retrieve policies for the specified resources. If you want to include a resource policy in the simulation, then you must include the policy as a string in the ResourcePolicy parameter. If you include a ResourcePolicy, then it must be applicable to all of the resources included in the simulation or you receive an invalid input error. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. Simulation of resource-based policies isn't supported for IAM roles.</td>
</tr>
<tr id="parameter-ResourceHandlingOption">
    <td><CopyableCode code="ResourceHandlingOption" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of simulation to run. Different API operations that support resource-based policies require different combinations of resources. By specifying the type of simulation to run, you enable the policy simulator to enforce the presence of the required resources to ensure reliable simulation results. If your simulation does not match one of the following scenarios, then you can omit this parameter. The following list shows each of the supported scenario values and the resources that you must define to run the simulation. Each of the Amazon EC2 scenarios requires that you specify instance, image, and security group resources. If your scenario includes an EBS volume, then you must specify that volume as a resource. If the Amazon EC2 scenario includes VPC, then you must supply the network interface resource. If it includes an IP subnet, then you must specify the subnet resource. For more information on the Amazon EC2 scenario options, see Supported platforms in the Amazon EC2 User Guide. EC2-VPC-InstanceStore instance, image, security group, network interface EC2-VPC-InstanceStore-Subnet instance, image, security group, network interface, subnet EC2-VPC-EBS instance, image, security group, network interface, volume EC2-VPC-EBS-Subnet instance, image, security group, network interface, subnet, volume</td>
</tr>
<tr id="parameter-ResourceOwner">
    <td><CopyableCode code="ResourceOwner" /></td>
    <td><code>string</code></td>
    <td>An ARN representing the Amazon Web Services account ID that specifies the owner of any simulated resource that does not identify its owner in the resource ARN. Examples of resource ARNs include an S3 bucket or object. If ResourceOwner is specified, it is also used as the account owner of any ResourcePolicy included in the simulation. If the ResourceOwner parameter is not specified, then the owner of the resources and the resource policy defaults to the account of the identity provided in CallerArn. This parameter is required only if you specify a resource-based policy and account that owns the resource is different from the account that owns the simulated calling user CallerArn. The ARN for an account uses the following syntax: arn:aws:iam::AWS-account-ID:root. For example, to represent the account with the 112233445566 ID, use the following ARN: arn:aws:iam::112233445566-ID:root.</td>
</tr>
<tr id="parameter-ResourcePolicy">
    <td><CopyableCode code="ResourcePolicy" /></td>
    <td><code>string</code></td>
    <td>A resource-based policy to include in the simulation provided as a string. Each resource in the simulation is treated as if it had this policy attached. You can include only one resource-based policy in a simulation. The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see IAM and STS character quotas. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D) Simulation of resource-based policies isn't supported for IAM roles.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="simulate_custom_policy"
    values={[
        { label: 'simulate_custom_policy', value: 'simulate_custom_policy' }
    ]}
>
<TabItem value="simulate_custom_policy">

Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The policies are provided as strings. The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations. You can simulate resources that don't exist in your account. If you want to simulate existing policies that are attached to an IAM user, group, or role, use SimulatePrincipalPolicy instead. Context keys are variables that are maintained by Amazon Web Services and its services and which provide details about the context of an API query request. You can use the Condition element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use GetContextKeysForCustomPolicy. If the output is long, you can use MaxItems and Marker parameters to paginate the results. The IAM policy simulator evaluates statements in identity-based policies, service control policies (SCPs) including their condition keys and resource scoping, and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see Testing IAM policies with the IAM policy simulator in the IAM User Guide.

```sql
EXEC aws.iam.custom_policies.simulate_custom_policy 
@PolicyInputList='{{ PolicyInputList }}' --required, 
@ActionNames='{{ ActionNames }}' --required, 
@region='{{ region }}' --required, 
@PermissionsBoundaryPolicyInputList='{{ PermissionsBoundaryPolicyInputList }}', 
@OrderedOrganizationPolicyInputList='{{ OrderedOrganizationPolicyInputList }}', 
@ResourceArns='{{ ResourceArns }}', 
@ResourcePolicy='{{ ResourcePolicy }}', 
@ResourceOwner='{{ ResourceOwner }}', 
@CallerArn='{{ CallerArn }}', 
@ContextEntries='{{ ContextEntries }}', 
@ResourceHandlingOption='{{ ResourceHandlingOption }}', 
@MaxItems='{{ MaxItems }}', 
@Marker='{{ Marker }}'
;
```
</TabItem>
</Tabs>
