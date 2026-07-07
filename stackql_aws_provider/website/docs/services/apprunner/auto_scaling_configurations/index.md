--- 
title: auto_scaling_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_scaling_configurations
  - apprunner
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

Creates, updates, deletes, gets or lists an <code>auto_scaling_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_scaling_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apprunner.auto_scaling_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_auto_scaling_configuration"
    values={[
        { label: 'describe_auto_scaling_configuration', value: 'describe_auto_scaling_configuration' },
        { label: 'list_auto_scaling_configurations', value: 'list_auto_scaling_configurations' }
    ]}
>
<TabItem value="describe_auto_scaling_configuration">

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
    <td><CopyableCode code="AutoScalingConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of this auto scaling configuration. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;0-9&#93;&#123;12&#125;:(\w|\/|-)&#123;1,1011&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AutoScalingConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The customer-provided auto scaling configuration name. It can be used in multiple revisions of a configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-_&#93;&#123;3,31&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AutoScalingConfigurationRevision" /></td>
    <td><code>integer</code></td>
    <td>The revision of this auto scaling configuration. It's unique among all the active configurations ("Status": "ACTIVE") that share the same AutoScalingConfigurationName.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the auto scaling configuration was created. It's in Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the auto scaling configuration was deleted. It's in Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="HasAssociatedService" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this auto scaling configuration has an App Runner service associated with it. A value of true indicates one or more services are associated. A value of false indicates no services are associated.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this auto scaling configuration should be used as the default for a new App Runner service that does not have an auto scaling configuration ARN specified during creation. Each account can have only one default AutoScalingConfiguration per region. The default AutoScalingConfiguration can be any revision under the same AutoScalingConfigurationName.</td>
</tr>
<tr>
    <td><CopyableCode code="Latest" /></td>
    <td><code>boolean</code></td>
    <td>It's set to true for the configuration with the highest Revision among all configurations that share the same AutoScalingConfigurationName. It's set to false otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxConcurrency" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of concurrent requests that an instance processes. If the number of concurrent requests exceeds this limit, App Runner scales the service up.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of instances that a service scales up to. At most MaxSize instances actively serve traffic for your service.</td>
</tr>
<tr>
    <td><CopyableCode code="MinSize" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of instances that App Runner provisions for a service. The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset. App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current state of the auto scaling configuration. If the status of a configuration revision is INACTIVE, it was deleted and can't be used. Inactive configuration revisions are permanently removed some time after they are deleted. (ACTIVE, INACTIVE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_auto_scaling_configurations">

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
    <td><CopyableCode code="AutoScalingConfigurationSummaryList" /></td>
    <td><code>array</code></td>
    <td>A list of summary information records for auto scaling configurations. In a paginated request, the request returns up to MaxResults records for each call.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_auto_scaling_configuration"><CopyableCode code="describe_auto_scaling_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return a full description of an App Runner automatic scaling configuration resource.</td>
</tr>
<tr>
    <td><a href="#list_auto_scaling_configurations"><CopyableCode code="list_auto_scaling_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name. To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by ListAutoScalingConfigurations.</td>
</tr>
<tr>
    <td><a href="#create_auto_scaling_configuration"><CopyableCode code="create_auto_scaling_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AutoScalingConfigurationName"><code>AutoScalingConfigurationName</code></a></td>
    <td></td>
    <td>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services. Create multiple revisions of a configuration by calling this action multiple times using the same AutoScalingConfigurationName. The call returns incremental AutoScalingConfigurationRevision values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision. Configure a higher MinSize to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost. Configure a lower MaxSize to control your cost. The tradeoff is lower responsiveness during peak demand.</td>
</tr>
<tr>
    <td><a href="#update_default_auto_scaling_configuration"><CopyableCode code="update_default_auto_scaling_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AutoScalingConfigurationArn"><code>AutoScalingConfigurationArn</code></a></td>
    <td></td>
    <td>Update an auto scaling configuration to be the default. The existing default auto scaling configuration will be set to non-default automatically.</td>
</tr>
<tr>
    <td><a href="#delete_auto_scaling_configuration"><CopyableCode code="delete_auto_scaling_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an App Runner automatic scaling configuration resource. You can delete a top level auto scaling configuration, a specific revision of one, or all revisions associated with the top level configuration. You can't delete the default auto scaling configuration or a configuration that's used by one or more App Runner services.</td>
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
    defaultValue="describe_auto_scaling_configuration"
    values={[
        { label: 'describe_auto_scaling_configuration', value: 'describe_auto_scaling_configuration' },
        { label: 'list_auto_scaling_configurations', value: 'list_auto_scaling_configurations' }
    ]}
>
<TabItem value="describe_auto_scaling_configuration">

Return a full description of an App Runner automatic scaling configuration resource.

```sql
SELECT
AutoScalingConfigurationArn,
AutoScalingConfigurationName,
AutoScalingConfigurationRevision,
CreatedAt,
DeletedAt,
HasAssociatedService,
IsDefault,
Latest,
MaxConcurrency,
MaxSize,
MinSize,
Status
FROM aws.apprunner.auto_scaling_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_auto_scaling_configurations">

Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name. To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by ListAutoScalingConfigurations.

```sql
SELECT
AutoScalingConfigurationSummaryList,
NextToken
FROM aws.apprunner.auto_scaling_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_auto_scaling_configuration"
    values={[
        { label: 'create_auto_scaling_configuration', value: 'create_auto_scaling_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_auto_scaling_configuration">

Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services. Create multiple revisions of a configuration by calling this action multiple times using the same AutoScalingConfigurationName. The call returns incremental AutoScalingConfigurationRevision values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision. Configure a higher MinSize to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost. Configure a lower MaxSize to control your cost. The tradeoff is lower responsiveness during peak demand.

```sql
INSERT INTO aws.apprunner.auto_scaling_configurations (
AutoScalingConfigurationName,
MaxConcurrency,
MinSize,
MaxSize,
Tags,
region
)
SELECT 
'{{ AutoScalingConfigurationName }}' /* required */,
{{ MaxConcurrency }},
{{ MinSize }},
{{ MaxSize }},
'{{ Tags }}',
'{{ region }}'
RETURNING
AutoScalingConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: auto_scaling_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the auto_scaling_configurations resource.
    - name: AutoScalingConfigurationName
      value: "{{ AutoScalingConfigurationName }}"
      description: |
        A name for the auto scaling configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. Prior to the release of Auto scale configuration enhancements, the name DefaultConfiguration was reserved. This restriction is no longer in place. You can now manage DefaultConfiguration the same way you manage your custom auto scaling configurations. This means you can do the following with the DefaultConfiguration that App Runner provides: Create new revisions of the DefaultConfiguration. Delete the revisions of the DefaultConfiguration. Delete the auto scaling configuration for which the App Runner DefaultConfiguration was created. If you delete the auto scaling configuration you can create another custom auto scaling configuration with the same DefaultConfiguration name. The original DefaultConfiguration resource provided by App Runner remains in your account unless you make changes to it.
    - name: MaxConcurrency
      value: {{ MaxConcurrency }}
      description: |
        The maximum number of concurrent requests that you want an instance to process. If the number of concurrent requests exceeds this limit, App Runner scales up your service. Default: 100
    - name: MinSize
      value: {{ MinSize }}
      description: |
        The minimum number of instances that App Runner provisions for your service. The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset. App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code. Default: 1
    - name: MaxSize
      value: {{ MaxSize }}
      description: |
        The maximum number of instances that your service scales up to. At most MaxSize instances actively serve traffic for your service. Default: 25
    - name: Tags
      description: |
        A list of metadata items that you can associate with your auto scaling configuration resource. A tag is a key-value pair.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_default_auto_scaling_configuration"
    values={[
        { label: 'update_default_auto_scaling_configuration', value: 'update_default_auto_scaling_configuration' }
    ]}
>
<TabItem value="update_default_auto_scaling_configuration">

Update an auto scaling configuration to be the default. The existing default auto scaling configuration will be set to non-default automatically.

```sql
UPDATE aws.apprunner.auto_scaling_configurations
SET 
AutoScalingConfigurationArn = '{{ AutoScalingConfigurationArn }}'
WHERE 
region = '{{ region }}' --required
AND AutoScalingConfigurationArn = '{{ AutoScalingConfigurationArn }}' --required
RETURNING
AutoScalingConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_auto_scaling_configuration"
    values={[
        { label: 'delete_auto_scaling_configuration', value: 'delete_auto_scaling_configuration' }
    ]}
>
<TabItem value="delete_auto_scaling_configuration">

Delete an App Runner automatic scaling configuration resource. You can delete a top level auto scaling configuration, a specific revision of one, or all revisions associated with the top level configuration. You can't delete the default auto scaling configuration or a configuration that's used by one or more App Runner services.

```sql
DELETE FROM aws.apprunner.auto_scaling_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
