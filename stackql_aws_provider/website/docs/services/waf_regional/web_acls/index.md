--- 
title: web_acls
hide_title: false
hide_table_of_contents: false
keywords:
  - web_acls
  - waf_regional
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

Creates, updates, deletes, gets or lists a <code>web_acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.waf_regional.web_acls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_web_acl"
    values={[
        { label: 'get_web_acl', value: 'get_web_acl' }
    ]}
>
<TabItem value="get_web_acl">

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
    <td><CopyableCode code="default_action" /></td>
    <td><code>object</code></td>
    <td>The action to perform if none of the Rules contained in the WebACL match. The action is specified by the WafAction object.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description for the metrics for this WebACL. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change MetricName after you create the WebACL. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A friendly name or description of the WebACL. You can't change the name of a WebACL after you create it. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>An array that contains the action for each Rule in a WebACL, the priority of the Rule, and the ID of the Rule.</td>
</tr>
<tr>
    <td><CopyableCode code="web_acl_arn" /></td>
    <td><code>string</code></td>
    <td>Tha Amazon Resource Name (ARN) of the web ACL. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="web_acl_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a WebACL. You use WebACLId to get information about a WebACL (see GetWebACL), update a WebACL (see UpdateWebACL), and delete a WebACL from AWS WAF (see DeleteWebACL). WebACLId is returned by CreateWebACL and by ListWebACLs. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_web_acl"><CopyableCode code="get_web_acl" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the WebACL that is specified by WebACLId.</td>
</tr>
<tr>
    <td><a href="#create_web_acl"><CopyableCode code="create_web_acl" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-MetricName"><code>MetricName</code></a>, <a href="#parameter-DefaultAction"><code>DefaultAction</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a WebACL, which contains the Rules that identify the CloudFront web requests that you want to allow, block, or count. AWS WAF evaluates Rules in order based on the value of Priority for each Rule. You also specify a default action, either ALLOW or BLOCK. If a web request doesn't match any of the Rules in a WebACL, AWS WAF responds to the request with the default action. To create and configure a WebACL, perform the following steps: Create and update the ByteMatchSet objects and other predicates that you want to include in Rules. For more information, see CreateByteMatchSet, UpdateByteMatchSet, CreateIPSet, UpdateIPSet, CreateSqlInjectionMatchSet, and UpdateSqlInjectionMatchSet. Create and update the Rules that you want to include in the WebACL. For more information, see CreateRule and UpdateRule. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateWebACL request. Submit a CreateWebACL request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateWebACL request. Submit an UpdateWebACL request to specify the Rules that you want to include in the WebACL, to specify the default action, and to associate the WebACL with a CloudFront distribution. For more information about how to use the AWS WAF API, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_web_acl_migration_stack"><CopyableCode code="create_web_acl_migration_stack" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebACLId"><code>WebACLId</code></a>, <a href="#parameter-S3BucketName"><code>S3BucketName</code></a>, <a href="#parameter-IgnoreUnsupportedType"><code>IgnoreUnsupportedType</code></a></td>
    <td></td>
    <td>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket. Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2. Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF. This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF. For the full procedure, including caveats and manual steps to complete the migration and switch over to the new web ACL, see Migrating your AWS WAF Classic resources to AWS WAF in the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#associate_web_acl"><CopyableCode code="associate_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebACLId"><code>WebACLId</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic Regional documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Associates a web ACL with a resource, either an application load balancer or Amazon API Gateway stage.</td>
</tr>
<tr>
    <td><a href="#update_web_acl"><CopyableCode code="update_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebACLId"><code>WebACLId</code></a>, <a href="#parameter-ChangeToken"><code>ChangeToken</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes ActivatedRule objects in a WebACL. Each Rule identifies web requests that you want to allow, block, or count. When you update a WebACL, you specify the following values: A default action for the WebACL, either ALLOW or BLOCK. AWS WAF performs the default action if a request doesn't match the criteria in any of the Rules in a WebACL. The Rules that you want to add or delete. If you want to replace one Rule with another, you delete the existing Rule and add the new one. For each Rule, whether you want AWS WAF to allow requests, block requests, or count requests that match the conditions in the Rule. The order in which you want AWS WAF to evaluate the Rules in a WebACL. If you add more than one Rule to a WebACL, AWS WAF evaluates each request against the Rules in order based on the value of Priority. (The Rule that has the lowest value for Priority is evaluated first.) When a web request matches all the predicates (such as ByteMatchSets and IPSets) in a Rule, AWS WAF immediately takes the corresponding action, allow or block, and doesn't evaluate the request against the remaining Rules in the WebACL, if any. To create and configure a WebACL, perform the following steps: Create and update the predicates that you want to include in Rules. For more information, see CreateByteMatchSet, UpdateByteMatchSet, CreateIPSet, UpdateIPSet, CreateSqlInjectionMatchSet, and UpdateSqlInjectionMatchSet. Create and update the Rules that you want to include in the WebACL. For more information, see CreateRule and UpdateRule. Create a WebACL. See CreateWebACL. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateWebACL request. Submit an UpdateWebACL request to specify the Rules that you want to include in the WebACL, to specify the default action, and to associate the WebACL with a CloudFront distribution. The ActivatedRule can be a rule group. If you specify a rule group as your ActivatedRule , you can exclude specific rules from that rule group. If you already have a rule group associated with a web ACL and want to submit an UpdateWebACL request to exclude certain rules from that rule group, you must first remove the rule group from the web ACL, the re-insert it again, specifying the excluded rules. For details, see ActivatedRule$ExcludedRules . Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the UpdateWebACL request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_web_acl"><CopyableCode code="disassociate_web_acl" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic Regional documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Removes a web ACL from the specified resource, either an application load balancer or Amazon API Gateway stage.</td>
</tr>
<tr>
    <td><a href="#delete_web_acl"><CopyableCode code="delete_web_acl" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a WebACL. You can't delete a WebACL if it still contains any Rules. To delete a WebACL, perform the following steps: Update the WebACL to remove Rules, if any. For more information, see UpdateWebACL. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteWebACL request. Submit a DeleteWebACL request.</td>
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
    defaultValue="get_web_acl"
    values={[
        { label: 'get_web_acl', value: 'get_web_acl' }
    ]}
>
<TabItem value="get_web_acl">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Returns the WebACL that is specified by WebACLId.

```sql
SELECT
default_action,
metric_name,
name,
rules,
web_acl_arn,
web_acl_id
FROM aws.waf_regional.web_acls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_web_acl"
    values={[
        { label: 'create_web_acl', value: 'create_web_acl' },
        { label: 'create_web_acl_migration_stack', value: 'create_web_acl_migration_stack' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_web_acl">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Creates a WebACL, which contains the Rules that identify the CloudFront web requests that you want to allow, block, or count. AWS WAF evaluates Rules in order based on the value of Priority for each Rule. You also specify a default action, either ALLOW or BLOCK. If a web request doesn't match any of the Rules in a WebACL, AWS WAF responds to the request with the default action. To create and configure a WebACL, perform the following steps: Create and update the ByteMatchSet objects and other predicates that you want to include in Rules. For more information, see CreateByteMatchSet, UpdateByteMatchSet, CreateIPSet, UpdateIPSet, CreateSqlInjectionMatchSet, and UpdateSqlInjectionMatchSet. Create and update the Rules that you want to include in the WebACL. For more information, see CreateRule and UpdateRule. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a CreateWebACL request. Submit a CreateWebACL request. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateWebACL request. Submit an UpdateWebACL request to specify the Rules that you want to include in the WebACL, to specify the default action, and to associate the WebACL with a CloudFront distribution. For more information about how to use the AWS WAF API, see the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf_regional.web_acls (
Name,
MetricName,
DefaultAction,
ChangeToken,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ MetricName }}' /* required */,
'{{ DefaultAction }}' /* required */,
'{{ ChangeToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
change_token,
web_acl
;
```
</TabItem>
<TabItem value="create_web_acl_migration_stack">

Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket. Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2. Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF. This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF. For the full procedure, including caveats and manual steps to complete the migration and switch over to the new web ACL, see Migrating your AWS WAF Classic resources to AWS WAF in the AWS WAF Developer Guide.

```sql
INSERT INTO aws.waf_regional.web_acls (
WebACLId,
S3BucketName,
IgnoreUnsupportedType,
region
)
SELECT 
'{{ WebACLId }}' /* required */,
'{{ S3BucketName }}' /* required */,
{{ IgnoreUnsupportedType }} /* required */,
'{{ region }}'
RETURNING
s3_object_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: web_acls
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the web_acls resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name or description of the WebACL. You can't change Name after you create the WebACL.
    - name: MetricName
      value: "{{ MetricName }}"
      description: |
        A friendly name or description for the metrics for this WebACL.The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change MetricName after you create the WebACL.
    - name: DefaultAction
      description: |
        The action that you want AWS WAF to take when a request doesn't match the criteria specified in any of the Rule objects that are associated with the WebACL.
      value:
        Type: "{{ Type }}"
    - name: ChangeToken
      value: "{{ ChangeToken }}"
      description: |
        The value returned by the most recent call to GetChangeToken.
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: WebACLId
      value: "{{ WebACLId }}"
      description: |
        The UUID of the WAF Classic web ACL that you want to migrate to WAF v2.
    - name: S3BucketName
      value: "{{ S3BucketName }}"
      description: |
        The name of the Amazon S3 bucket to store the CloudFormation template in. The S3 bucket must be configured as follows for the migration: The bucket name must start with aws-waf-migration-. For example, aws-waf-migration-my-web-acl. The bucket must be in the Region where you are deploying the template. For example, for a web ACL in us-west-2, you must use an Amazon S3 bucket in us-west-2 and you must deploy the template stack to us-west-2. The bucket policies must permit the migration process to write data. For listings of the bucket policies, see the Examples section.
    - name: IgnoreUnsupportedType
      value: {{ IgnoreUnsupportedType }}
      description: |
        Indicates whether to exclude entities that can't be migrated or to stop the migration. Set this to true to ignore unsupported entities in the web ACL during the migration. Otherwise, if AWS WAF encounters unsupported entities, it stops the process and throws an exception.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_web_acl"
    values={[
        { label: 'associate_web_acl', value: 'associate_web_acl' },
        { label: 'update_web_acl', value: 'update_web_acl' },
        { label: 'disassociate_web_acl', value: 'disassociate_web_acl' }
    ]}
>
<TabItem value="associate_web_acl">

This is AWS WAF Classic Regional documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Associates a web ACL with a resource, either an application load balancer or Amazon API Gateway stage.

```sql
UPDATE aws.waf_regional.web_acls
SET 
WebACLId = '{{ WebACLId }}',
ResourceArn = '{{ ResourceArn }}'
WHERE 
region = '{{ region }}' --required
AND WebACLId = '{{ WebACLId }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required;
```
</TabItem>
<TabItem value="update_web_acl">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Inserts or deletes ActivatedRule objects in a WebACL. Each Rule identifies web requests that you want to allow, block, or count. When you update a WebACL, you specify the following values: A default action for the WebACL, either ALLOW or BLOCK. AWS WAF performs the default action if a request doesn't match the criteria in any of the Rules in a WebACL. The Rules that you want to add or delete. If you want to replace one Rule with another, you delete the existing Rule and add the new one. For each Rule, whether you want AWS WAF to allow requests, block requests, or count requests that match the conditions in the Rule. The order in which you want AWS WAF to evaluate the Rules in a WebACL. If you add more than one Rule to a WebACL, AWS WAF evaluates each request against the Rules in order based on the value of Priority. (The Rule that has the lowest value for Priority is evaluated first.) When a web request matches all the predicates (such as ByteMatchSets and IPSets) in a Rule, AWS WAF immediately takes the corresponding action, allow or block, and doesn't evaluate the request against the remaining Rules in the WebACL, if any. To create and configure a WebACL, perform the following steps: Create and update the predicates that you want to include in Rules. For more information, see CreateByteMatchSet, UpdateByteMatchSet, CreateIPSet, UpdateIPSet, CreateSqlInjectionMatchSet, and UpdateSqlInjectionMatchSet. Create and update the Rules that you want to include in the WebACL. For more information, see CreateRule and UpdateRule. Create a WebACL. See CreateWebACL. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of an UpdateWebACL request. Submit an UpdateWebACL request to specify the Rules that you want to include in the WebACL, to specify the default action, and to associate the WebACL with a CloudFront distribution. The ActivatedRule can be a rule group. If you specify a rule group as your ActivatedRule , you can exclude specific rules from that rule group. If you already have a rule group associated with a web ACL and want to submit an UpdateWebACL request to exclude certain rules from that rule group, you must first remove the rule group from the web ACL, the re-insert it again, specifying the excluded rules. For details, see ActivatedRule$ExcludedRules . Be aware that if you try to add a RATE_BASED rule to a web ACL without setting the rule type when first creating the rule, the UpdateWebACL request will fail because the request tries to add a REGULAR rule (the default rule type) with the specified ID, which does not exist. For more information about how to use the AWS WAF API to allow or block HTTP requests, see the AWS WAF Developer Guide.

```sql
UPDATE aws.waf_regional.web_acls
SET 
WebACLId = '{{ WebACLId }}',
ChangeToken = '{{ ChangeToken }}',
Updates = '{{ Updates }}',
DefaultAction = '{{ DefaultAction }}'
WHERE 
region = '{{ region }}' --required
AND WebACLId = '{{ WebACLId }}' --required
AND ChangeToken = '{{ ChangeToken }}' --required
RETURNING
change_token;
```
</TabItem>
<TabItem value="disassociate_web_acl">

This is AWS WAF Classic Regional documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Removes a web ACL from the specified resource, either an application load balancer or Amazon API Gateway stage.

```sql
UPDATE aws.waf_regional.web_acls
SET 
ResourceArn = '{{ ResourceArn }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_web_acl"
    values={[
        { label: 'delete_web_acl', value: 'delete_web_acl' }
    ]}
>
<TabItem value="delete_web_acl">

This is AWS WAF Classic documentation. For more information, see AWS WAF Classic in the developer guide. For the latest version of AWS WAF, use the AWS WAFV2 API and see the AWS WAF Developer Guide. With the latest version, AWS WAF has a single set of endpoints for regional and global use. Permanently deletes a WebACL. You can't delete a WebACL if it still contains any Rules. To delete a WebACL, perform the following steps: Update the WebACL to remove Rules, if any. For more information, see UpdateWebACL. Use GetChangeToken to get the change token that you provide in the ChangeToken parameter of a DeleteWebACL request. Submit a DeleteWebACL request.

```sql
DELETE FROM aws.waf_regional.web_acls
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
