--- 
title: system_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - system_instances
  - iotthingsgraph
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

Creates, updates, deletes, gets or lists a <code>system_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="system_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotthingsgraph.system_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_system_instance"
    values={[
        { label: 'get_system_instance', value: 'get_system_instance' },
        { label: 'search_system_instances', value: 'search_system_instances' }
    ]}
>
<TabItem value="get_system_instance">

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
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>A document that defines an entity.</td>
</tr>
<tr>
    <td><CopyableCode code="flowActionsRoleArn" /></td>
    <td><code>string</code></td>
    <td>The AWS Identity and Access Management (IAM) role that AWS IoT Things Graph assumes during flow execution in a cloud deployment. This role must have read and write permissionss to AWS Lambda and AWS IoT and to any other AWS services that the flow uses.</td>
</tr>
<tr>
    <td><CopyableCode code="metricsConfiguration" /></td>
    <td><code>object</code></td>
    <td>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="s3BucketName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Simple Storage Service bucket where information about a system instance is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>object</code></td>
    <td>An object that contains summary information about a system instance.</td>
</tr>
<tr>
    <td><CopyableCode code="validatedDependencyRevisions" /></td>
    <td><code>array</code></td>
    <td>A list of objects that contain all of the IDs and revision numbers of workflows and systems that are used in a system instance.</td>
</tr>
<tr>
    <td><CopyableCode code="validatedNamespaceVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the user's namespace against which the system instance was validated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_system_instances">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the system instance. (pattern: &lt;code&gt;^urn:tdm:((&#91;a-z&#93;&#123;2&#125;-(gov-)?&#91;a-z&#93;&#123;4,9&#125;-&#91;0-9&#93;&#123;1,3&#125;/&#91;0-9&#93;+/)*&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*):(&#91;\p&#123;Alpha&#125;&#93;*):(&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the system instance.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the system instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="greengrassGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Greengrass group where the system instance is deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="greengrassGroupName" /></td>
    <td><code>string</code></td>
    <td>The ID of the Greengrass group where the system instance is deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="greengrassGroupVersionId" /></td>
    <td><code>string</code></td>
    <td>The version of the Greengrass group where the system instance is deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the system instance. (NOT_DEPLOYED, BOOTSTRAP, DEPLOY_IN_PROGRESS, DEPLOYED_IN_TARGET, UNDEPLOY_IN_PROGRESS, FAILED, PENDING_DELETE, DELETED_IN_TARGET)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The target of the system instance. (GREENGRASS, CLOUD)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the system instance was last updated.</td>
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
    <td><a href="#get_system_instance"><CopyableCode code="get_system_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a system instance.</td>
</tr>
<tr>
    <td><a href="#search_system_instances"><CopyableCode code="search_system_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for system instances in the user's account.</td>
</tr>
<tr>
    <td><a href="#create_system_instance"><CopyableCode code="create_system_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a>, <a href="#parameter-target"><code>target</code></a></td>
    <td></td>
    <td>Creates a system instance. This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the greengrassGroupName parameter. It also adds a file to the S3 bucket specified by the s3BucketName parameter. You need to call DeploySystemInstance after running this action. For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error. For cloud deployments, this action requires a flowActionsRoleArn value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes. If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</td>
</tr>
<tr>
    <td><a href="#delete_system_instance"><CopyableCode code="delete_system_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted. Users can create a new system instance that has the same ID as a deleted system instance.</td>
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
    defaultValue="get_system_instance"
    values={[
        { label: 'get_system_instance', value: 'get_system_instance' },
        { label: 'search_system_instances', value: 'search_system_instances' }
    ]}
>
<TabItem value="get_system_instance">

Gets a system instance.

```sql
SELECT
definition,
flowActionsRoleArn,
metricsConfiguration,
s3BucketName,
summary,
validatedDependencyRevisions,
validatedNamespaceVersion
FROM aws.iotthingsgraph.system_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_system_instances">

Searches for system instances in the user's account.

```sql
SELECT
id,
arn,
createdAt,
greengrassGroupId,
greengrassGroupName,
greengrassGroupVersionId,
status,
target,
updatedAt
FROM aws.iotthingsgraph.system_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_system_instance"
    values={[
        { label: 'create_system_instance', value: 'create_system_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_system_instance">

Creates a system instance. This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is specified by the greengrassGroupName parameter. It also adds a file to the S3 bucket specified by the s3BucketName parameter. You need to call DeploySystemInstance after running this action. For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error. For cloud deployments, this action requires a flowActionsRoleArn value. This is an IAM role that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes. If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.

```sql
INSERT INTO aws.iotthingsgraph.system_instances (
tags,
definition,
target,
greengrassGroupName,
s3BucketName,
metricsConfiguration,
flowActionsRoleArn,
region
)
SELECT 
'{{ tags }}',
'{{ definition }}' /* required */,
'{{ target }}' /* required */,
'{{ greengrassGroupName }}',
'{{ s3BucketName }}',
'{{ metricsConfiguration }}',
'{{ flowActionsRoleArn }}',
'{{ region }}'
RETURNING
summary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: system_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the system_instances resource.
    - name: tags
      description: |
        Metadata, consisting of key-value pairs, that can be used to categorize your system instances.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: definition
      description: |
        A document that defines an entity.
      value:
        language: "{{ language }}"
        text: "{{ text }}"
    - name: target
      value: "{{ target }}"
      description: |
        The target type of the deployment. Valid values are GREENGRASS and CLOUD.
      valid_values: ['GREENGRASS', 'CLOUD']
    - name: greengrassGroupName
      value: "{{ greengrassGroupName }}"
      description: |
        The name of the Greengrass group where the system instance will be deployed. This value is required if the value of the target parameter is GREENGRASS.
    - name: s3BucketName
      value: "{{ s3BucketName }}"
      description: |
        The name of the Amazon Simple Storage Service bucket that will be used to store and deploy the system instance's resource file. This value is required if the value of the target parameter is GREENGRASS.
    - name: metricsConfiguration
      description: |
        An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
      value:
        cloudMetricEnabled: {{ cloudMetricEnabled }}
        metricRuleRoleArn: "{{ metricRuleRoleArn }}"
    - name: flowActionsRoleArn
      value: "{{ flowActionsRoleArn }}"
      description: |
        The ARN of the IAM role that AWS IoT Things Graph will assume when it executes the flow. This role must have read and write access to AWS Lambda and AWS IoT and any other AWS services that the flow uses when it executes. This value is required if the value of the target parameter is CLOUD.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_system_instance"
    values={[
        { label: 'delete_system_instance', value: 'delete_system_instance' }
    ]}
>
<TabItem value="delete_system_instance">

Deletes a system instance. Only system instances that have never been deployed, or that have been undeployed can be deleted. Users can create a new system instance that has the same ID as a deleted system instance.

```sql
DELETE FROM aws.iotthingsgraph.system_instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
