--- 
title: principal_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - principal_policies
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

Creates, updates, deletes, gets or lists a <code>principal_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="principal_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.principal_policies" /></td></tr>
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
    <td><a href="#simulate_principal_policy"><CopyableCode code="simulate_principal_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-PolicySourceArn"><code>PolicySourceArn</code></a>, <a href="#parameter-ActionNames"><code>ActionNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PolicyInputList"><code>PolicyInputList</code></a>, <a href="#parameter-PermissionsBoundaryPolicyInputList"><code>PermissionsBoundaryPolicyInputList</code></a>, <a href="#parameter-PolicyExclusionList"><code>PolicyExclusionList</code></a>, <a href="#parameter-ResourceArns"><code>ResourceArns</code></a>, <a href="#parameter-ResourcePolicy"><code>ResourcePolicy</code></a>, <a href="#parameter-ResourceOwner"><code>ResourceOwner</code></a>, <a href="#parameter-CallerArn"><code>CallerArn</code></a>, <a href="#parameter-ContextEntries"><code>ContextEntries</code></a>, <a href="#parameter-ResourceHandlingOption"><code>ResourceHandlingOption</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Simulate how a set of IAM policies attached to an IAM entity works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to. You can simulate resources that don't exist in your account. You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use SimulateCustomPolicy instead. You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation for IAM users only. The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations. For cross-account simulations, EvalDecisionDetails returns the decision for each policy type (identity-based policy, resource-based policy, and permissions boundary). This helps you identify which policy type is responsible for an allow or deny decision when policies span multiple accounts. Note: This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use SimulateCustomPolicy instead. Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. You can use the Condition element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use GetContextKeysForPrincipalPolicy. If the output is long, you can use the MaxItems and Marker parameters to paginate the results. The IAM policy simulator evaluates statements in identity-based policies, service control policies (SCPs) including their condition keys and resource scoping, and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see Testing IAM policies with the IAM policy simulator in the IAM User Guide.</td>
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
    <td>A list of names of API operations to evaluate in the simulation. Each operation is evaluated for each resource. Each operation must include the service identifier, such as iam:CreateUser.</td>
</tr>
<tr id="parameter-PolicySourceArn">
    <td><CopyableCode code="PolicySourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a user, group, or role whose policies you want to include in the simulation. If you specify a user, group, or role, the simulation includes all policies that are associated with that entity. If you specify a user, the simulation also includes all policies that are attached to any groups the user belongs to. The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see IAM and STS character quotas. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CallerArn">
    <td><CopyableCode code="CallerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM user, group, or role that you want to specify as the simulated caller of the API operations. If you do not specify a CallerArn, it defaults to the ARN of the user, group, or role that you specify in PolicySourceArn. If you include both a PolicySourceArn (for example, arn:aws:iam::123456789012:user/David) and a CallerArn (for example, arn:aws:iam::123456789012:user/Bob), the result is that you simulate calling the API operations as Bob, as if Bob had David's policies. You can specify the ARN of an IAM user, group, or role. You cannot specify the ARN of an assumed role, federated user, or a service principal. CallerArn is required if you include a ResourcePolicy and the PolicySourceArn is not the ARN for an IAM user, group, or role. This is required so that the resource-based policy's Principal element has a value to use in evaluating the policy. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
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
<tr id="parameter-PermissionsBoundaryPolicyInputList">
    <td><CopyableCode code="PermissionsBoundaryPolicyInputList" /></td>
    <td><code>array</code></td>
    <td>The IAM permissions boundary policy to simulate. The permissions boundary sets the maximum permissions that the entity can have. You can input only one permissions boundary when you pass a policy to this operation. An IAM entity can only have one permissions boundary in effect at a time. For example, if a permissions boundary is attached to an entity and you pass in a different permissions boundary policy using this parameter, then the new permissions boundary policy is used for the simulation. For more information about permissions boundaries, see Permissions boundaries for IAM entities in the IAM User Guide. The policy input is specified as a string containing the complete, valid JSON text of a permissions boundary policy. The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see IAM and STS character quotas. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-PolicyExclusionList">
    <td><CopyableCode code="PolicyExclusionList" /></td>
    <td><code>array</code></td>
    <td>A list of policies to exclude from the simulation. Use this parameter to test what the simulation result would be if a policy were removed, without changing which policies are actually attached to the principal identified by PolicySourceArn. Each entry is a PolicyIdentifier that identifies one or more policies to exclude by policy type, by Amazon Resource Name (ARN), or by the name of an inline policy and the entity it is attached to. Syntactically invalid identifiers, such as malformed ARNs or wildcards in disallowed positions, cause the request to fail with an InvalidInput error. Syntactically valid identifiers that don't match any attached policy are ignored. Resource control policies (RCPs) are not supported in this release; identifiers that target RCPs are also ignored.</td>
</tr>
<tr id="parameter-PolicyInputList">
    <td><CopyableCode code="PolicyInputList" /></td>
    <td><code>array</code></td>
    <td>An optional list of additional policy documents to include in the simulation. Each document is specified as a string containing the complete, valid JSON text of an IAM policy. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</td>
</tr>
<tr id="parameter-ResourceArns">
    <td><CopyableCode code="ResourceArns" /></td>
    <td><code>array</code></td>
    <td>A list of ARNs of Amazon Web Services resources to include in the simulation. If this parameter is not provided, then the value defaults to * (all resources). Each API in the ActionNames parameter is evaluated for each resource in this list. The simulation determines the access result (allowed or denied) of each combination and reports it in the response. You can simulate resources that don't exist in your account. The simulation does not automatically retrieve policies for the specified resources. If you want to include a resource policy in the simulation, then you must include the policy as a string in the ResourcePolicy parameter. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. Simulation of resource-based policies isn't supported for IAM roles.</td>
</tr>
<tr id="parameter-ResourceHandlingOption">
    <td><CopyableCode code="ResourceHandlingOption" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of simulation to run. Different API operations that support resource-based policies require different combinations of resources. By specifying the type of simulation to run, you enable the policy simulator to enforce the presence of the required resources to ensure reliable simulation results. If your simulation does not match one of the following scenarios, then you can omit this parameter. The following list shows each of the supported scenario values and the resources that you must define to run the simulation. Each of the Amazon EC2 scenarios requires that you specify instance, image, and security group resources. If your scenario includes an EBS volume, then you must specify that volume as a resource. If the Amazon EC2 scenario includes VPC, then you must supply the network interface resource. If it includes an IP subnet, then you must specify the subnet resource. For more information on the Amazon EC2 scenario options, see Supported platforms in the Amazon EC2 User Guide. EC2-VPC-InstanceStore instance, image, security group, network interface EC2-VPC-InstanceStore-Subnet instance, image, security group, network interface, subnet EC2-VPC-EBS instance, image, security group, network interface, volume EC2-VPC-EBS-Subnet instance, image, security group, network interface, subnet, volume</td>
</tr>
<tr id="parameter-ResourceOwner">
    <td><CopyableCode code="ResourceOwner" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services account ID that specifies the owner of any simulated resource that does not identify its owner in the resource ARN. Examples of resource ARNs include an S3 bucket or object. If ResourceOwner is specified, it is also used as the account owner of any ResourcePolicy included in the simulation. If the ResourceOwner parameter is not specified, then the owner of the resources and the resource policy defaults to the account of the identity provided in CallerArn. This parameter is required only if you specify a resource-based policy and account that owns the resource is different from the account that owns the simulated calling user CallerArn.</td>
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
    defaultValue="simulate_principal_policy"
    values={[
        { label: 'simulate_principal_policy', value: 'simulate_principal_policy' }
    ]}
>
<TabItem value="simulate_principal_policy">

Simulate how a set of IAM policies attached to an IAM entity works with a list of API operations and Amazon Web Services resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to. You can simulate resources that don't exist in your account. You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use SimulateCustomPolicy instead. You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation for IAM users only. The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations. For cross-account simulations, EvalDecisionDetails returns the decision for each policy type (identity-based policy, resource-based policy, and permissions boundary). This helps you identify which policy type is responsible for an allow or deny decision when policies span multiple accounts. Note: This operation discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use SimulateCustomPolicy instead. Context keys are variables maintained by Amazon Web Services and its services that provide details about the context of an API query request. You can use the Condition element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use GetContextKeysForPrincipalPolicy. If the output is long, you can use the MaxItems and Marker parameters to paginate the results. The IAM policy simulator evaluates statements in identity-based policies, service control policies (SCPs) including their condition keys and resource scoping, and the inputs that you provide during simulation. The policy simulator results can differ from your live Amazon Web Services environment. We recommend that you check your policies against your live Amazon Web Services environment after testing using the policy simulator to confirm that you have the desired results. For more information about using the policy simulator, see Testing IAM policies with the IAM policy simulator in the IAM User Guide.

```sql
EXEC aws.iam.principal_policies.simulate_principal_policy 
@PolicySourceArn='{{ PolicySourceArn }}' --required, 
@ActionNames='{{ ActionNames }}' --required, 
@region='{{ region }}' --required, 
@PolicyInputList='{{ PolicyInputList }}', 
@PermissionsBoundaryPolicyInputList='{{ PermissionsBoundaryPolicyInputList }}', 
@PolicyExclusionList='{{ PolicyExclusionList }}', 
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
