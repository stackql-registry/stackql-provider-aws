--- 
title: app_version_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - app_version_templates
  - resiliencehub
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

Creates, updates, deletes, gets or lists an <code>app_version_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_version_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.app_version_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_version_template"
    values={[
        { label: 'describe_app_version_template', value: 'describe_app_version_template' }
    ]}
>
<TabItem value="describe_app_version_template">

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
    <td><CopyableCode code="app_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:partition:resiliencehub:region:account:app/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_template_body" /></td>
    <td><code>string</code></td>
    <td>A JSON string that provides information about your application structure. To learn more about the appTemplateBody template, see the sample template provided in the Examples section. The appTemplateBody JSON string has the following structure: resources The list of logical resources that must be included in the Resilience Hub application. Type: Array Don't add the resources that you want to exclude. Each resources array item includes the following fields: logicalResourceId Logical identifier of the resource. Type: Object Each logicalResourceId object includes the following fields: identifier Identifier of the resource. Type: String logicalStackName The name of the CloudFormation stack this resource belongs to. Type: String resourceGroupName The name of the resource group this resource belongs to. Type: String terraformSourceName The name of the Terraform S3 state file this resource belongs to. Type: String eksSourceName Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to. This parameter accepts values in "eks-cluster/namespace" format. Type: String type The type of resource. Type: string name The name of the resource. Type: String additionalInfo Additional configuration parameters for an Resilience Hub application. If you want to implement additionalInfo through the Resilience Hub console rather than using an API call, see Configure the application configuration parameters. Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account. Key: "failover-regions" Value: "&#91;&#123;"region":"<code>&lt;REGION&gt;</code>", "accounts":&#91;&#123;"id":"<code>&lt;ACCOUNT_ID&gt;</code>"&#125;&#93;&#125;&#93;" appComponents List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added. Type: Array Each appComponents array item includes the following fields: name Name of the Application Component. Type: String type Type of Application Component. For more information about the types of Application Component, see Grouping resources in an AppComponent. Type: String resourceNames The list of included resources that are assigned to the Application Component. Type: Array of strings additionalInfo Additional configuration parameters for an Resilience Hub application. If you want to implement additionalInfo through the Resilience Hub console rather than using an API call, see Configure the application configuration parameters. Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account. Key: "failover-regions" Value: "&#91;&#123;"region":"<code>&lt;REGION&gt;</code>", "accounts":&#91;&#123;"id":"<code>&lt;ACCOUNT_ID&gt;</code>"&#125;&#93;&#125;&#93;" excludedResources The list of logical resource identifiers to be excluded from the application. Type: Array Don't add the resources that you want to include. Each excludedResources array item includes the following fields: logicalResourceIds Logical identifier of the resource. Type: Object You can configure only one of the following fields: logicalStackName resourceGroupName terraformSourceName eksSourceName Each logicalResourceIds object includes the following fields: identifier Identifier of the resource. Type: String logicalStackName The name of the CloudFormation stack this resource belongs to. Type: String resourceGroupName The name of the resource group this resource belongs to. Type: String terraformSourceName The name of the Terraform S3 state file this resource belongs to. Type: String eksSourceName Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to. This parameter accepts values in "eks-cluster/namespace" format. Type: String version Resilience Hub application version. additionalInfo Additional configuration parameters for an Resilience Hub application. If you want to implement additionalInfo through the Resilience Hub console rather than using an API call, see Configure the application configuration parameters. Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account. Key: "failover-regions" Value: "&#91;&#123;"region":"<code>&lt;REGION&gt;</code>", "accounts":&#91;&#123;"id":"<code>&lt;ACCOUNT_ID&gt;</code>"&#125;&#93;&#125;&#93;" (pattern: &lt;code&gt;^&#91;\w\s:,-\.'\/&#123;&#125;\&#91;\&#93;:"\\&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_version" /></td>
    <td><code>string</code></td>
    <td>The version of the application. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_app_version_template"><CopyableCode code="describe_app_version_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes details about an Resilience Hub application.</td>
</tr>
<tr>
    <td><a href="#put_draft_app_version_template"><CopyableCode code="put_draft_app_version_template" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appArn"><code>appArn</code></a>, <a href="#parameter-appTemplateBody"><code>appTemplateBody</code></a></td>
    <td></td>
    <td>Adds or updates the app template for an Resilience Hub application draft version.</td>
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
    defaultValue="describe_app_version_template"
    values={[
        { label: 'describe_app_version_template', value: 'describe_app_version_template' }
    ]}
>
<TabItem value="describe_app_version_template">

Describes details about an Resilience Hub application.

```sql
SELECT
app_arn,
app_template_body,
app_version
FROM aws.resiliencehub.app_version_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_draft_app_version_template"
    values={[
        { label: 'put_draft_app_version_template', value: 'put_draft_app_version_template' }
    ]}
>
<TabItem value="put_draft_app_version_template">

Adds or updates the app template for an Resilience Hub application draft version.

```sql
REPLACE aws.resiliencehub.app_version_templates
SET 
appArn = '{{ appArn }}',
appTemplateBody = '{{ appTemplateBody }}'
WHERE 
region = '{{ region }}' --required
AND appArn = '{{ appArn }}' --required
AND appTemplateBody = '{{ appTemplateBody }}' --required
RETURNING
app_arn,
app_version;
```
</TabItem>
</Tabs>
