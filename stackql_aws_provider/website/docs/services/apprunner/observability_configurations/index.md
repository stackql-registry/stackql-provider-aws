--- 
title: observability_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - observability_configurations
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

Creates, updates, deletes, gets or lists an <code>observability_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="observability_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apprunner.observability_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_observability_configuration"
    values={[
        { label: 'describe_observability_configuration', value: 'describe_observability_configuration' },
        { label: 'list_observability_configurations', value: 'list_observability_configurations' }
    ]}
>
<TabItem value="describe_observability_configuration">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the observability configuration was created. It's in Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the observability configuration was deleted. It's in Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="Latest" /></td>
    <td><code>boolean</code></td>
    <td>It's set to true for the configuration with the highest Revision among all configurations that share the same ObservabilityConfigurationName. It's set to false otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="ObservabilityConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of this observability configuration. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;0-9&#93;&#123;12&#125;:(\w|\/|-)&#123;1,1011&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ObservabilityConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The customer-provided observability configuration name. It can be used in multiple revisions of a configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-_&#93;&#123;3,31&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ObservabilityConfigurationRevision" /></td>
    <td><code>integer</code></td>
    <td>The revision of this observability configuration. It's unique among all the active configurations ("Status": "ACTIVE") that share the same ObservabilityConfigurationName.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current state of the observability configuration. If the status of a configuration revision is INACTIVE, it was deleted and can't be used. Inactive configuration revisions are permanently removed some time after they are deleted. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="TraceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the tracing feature within this observability configuration. If not specified, tracing isn't enabled.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_observability_configurations">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ObservabilityConfigurationSummaryList" /></td>
    <td><code>array</code></td>
    <td>A list of summary information records for observability configurations. In a paginated request, the request returns up to MaxResults records for each call.</td>
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
    <td><a href="#describe_observability_configuration"><CopyableCode code="describe_observability_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return a full description of an App Runner observability configuration resource.</td>
</tr>
<tr>
    <td><a href="#list_observability_configurations"><CopyableCode code="list_observability_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name. To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by ListObservabilityConfigurations.</td>
</tr>
<tr>
    <td><a href="#create_observability_configuration"><CopyableCode code="create_observability_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ObservabilityConfigurationName"><code>ObservabilityConfigurationName</code></a></td>
    <td></td>
    <td>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services. Create multiple revisions of a configuration by calling this action multiple times using the same ObservabilityConfigurationName. The call returns incremental ObservabilityConfigurationRevision values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision. The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, TraceConfiguration). If you don't specify a feature parameter, App Runner doesn't enable the feature.</td>
</tr>
<tr>
    <td><a href="#delete_observability_configuration"><CopyableCode code="delete_observability_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.</td>
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
    defaultValue="describe_observability_configuration"
    values={[
        { label: 'describe_observability_configuration', value: 'describe_observability_configuration' },
        { label: 'list_observability_configurations', value: 'list_observability_configurations' }
    ]}
>
<TabItem value="describe_observability_configuration">

Return a full description of an App Runner observability configuration resource.

```sql
SELECT
CreatedAt,
DeletedAt,
Latest,
ObservabilityConfigurationArn,
ObservabilityConfigurationName,
ObservabilityConfigurationRevision,
Status,
TraceConfiguration
FROM aws.apprunner.observability_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_observability_configurations">

Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name. To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by ListObservabilityConfigurations.

```sql
SELECT
NextToken,
ObservabilityConfigurationSummaryList
FROM aws.apprunner.observability_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_observability_configuration"
    values={[
        { label: 'create_observability_configuration', value: 'create_observability_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_observability_configuration">

Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services. Create multiple revisions of a configuration by calling this action multiple times using the same ObservabilityConfigurationName. The call returns incremental ObservabilityConfigurationRevision values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision. The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, TraceConfiguration). If you don't specify a feature parameter, App Runner doesn't enable the feature.

```sql
INSERT INTO aws.apprunner.observability_configurations (
ObservabilityConfigurationName,
TraceConfiguration,
Tags,
region
)
SELECT 
'{{ ObservabilityConfigurationName }}' /* required */,
'{{ TraceConfiguration }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ObservabilityConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: observability_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the observability_configurations resource.
    - name: ObservabilityConfigurationName
      value: "{{ ObservabilityConfigurationName }}"
      description: |
        A name for the observability configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. The name DefaultConfiguration is reserved. You can't use it to create a new observability configuration, and you can't create a revision of it. When you want to use your own observability configuration for your App Runner service, create a configuration with a different name, and then provide it when you create or update your service.
    - name: TraceConfiguration
      description: |
        The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.
      value:
        Vendor: "{{ Vendor }}"
    - name: Tags
      description: |
        A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_observability_configuration"
    values={[
        { label: 'delete_observability_configuration', value: 'delete_observability_configuration' }
    ]}
>
<TabItem value="delete_observability_configuration">

Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.

```sql
DELETE FROM aws.apprunner.observability_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
