--- 
title: pipes
hide_title: false
hide_table_of_contents: false
keywords:
  - pipes
  - pipes
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

Creates, updates, deletes, gets or lists a <code>pipes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pipes.pipes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pipe"
    values={[
        { label: 'describe_pipe', value: 'describe_pipe' },
        { label: 'list_pipes', value: 'list_pipes' }
    ]}
>
<TabItem value="describe_pipe">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the pipe. (pattern: &lt;code&gt;arn:aws(&#91;a-z&#93;|\-)*:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the pipe was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentState" /></td>
    <td><code>string</code></td>
    <td>The state the pipe is in. (RUNNING, STOPPED, CREATING, UPDATING, DELETING, STARTING, STOPPING, CREATE_FAILED, UPDATE_FAILED, START_FAILED, STOP_FAILED, DELETE_FAILED, CREATE_ROLLBACK_FAILED, DELETE_ROLLBACK_FAILED, UPDATE_ROLLBACK_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the pipe. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DesiredState" /></td>
    <td><code>string</code></td>
    <td>The state the pipe should be in. (RUNNING, STOPPED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Enrichment" /></td>
    <td><code>string</code></td>
    <td>The ARN of the enrichment resource. (pattern: &lt;code&gt;$|arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z&#93;&#123;2,4&#125;((-gov)|(-de)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+(-\d&#123;1&#125;)?)?:(\d&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EnrichmentParameters" /></td>
    <td><code>object</code></td>
    <td>The parameters required to set up enrichment on your pipe.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the KMS customer managed key for EventBridge to use to encrypt pipe data, if one has been specified. For more information, see Data encryption in EventBridge in the Amazon EventBridge User Guide. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-/:&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the pipe was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="LogConfiguration" /></td>
    <td><code>object</code></td>
    <td>The logging configuration settings for the pipe.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipe. (pattern: &lt;code&gt;&#91;\.\-_A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the role that allows the pipe to send data to the target. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The ARN of the source resource. (pattern: &lt;code&gt;smk:​//((&#91;a-zA-Z0-9&#93;|&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-&#93;*&#91;a-zA-Z0-9&#93;)\.)*(&#91;A-Za-z0-9&#93;|&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-&#93;*&#91;A-Za-z0-9&#93;):&#91;0-9&#93;&#123;1,5&#125;|arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z&#93;&#123;2,4&#125;((-gov)|(-de)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+(-\d&#123;1&#125;)?)?:(\d&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceParameters" /></td>
    <td><code>object</code></td>
    <td>The parameters required to set up a source for your pipe.</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>The reason the pipe is in its current state. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The list of key-value pairs to associate with the pipe.</td>
</tr>
<tr>
    <td><CopyableCode code="Target" /></td>
    <td><code>string</code></td>
    <td>The ARN of the target resource. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z&#93;&#123;2,4&#125;((-gov)|(-de)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+(-\d&#123;1&#125;)?)?:(\d&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetParameters" /></td>
    <td><code>object</code></td>
    <td>The parameters required to set up a target for your pipe. For more information about pipe target parameters, including how to use dynamic path parameters, see Target parameters in the Amazon EventBridge User Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pipes">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the pipe. (pattern: &lt;code&gt;arn:aws(&#91;a-z&#93;|\-)*:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the pipe was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentState" /></td>
    <td><code>string</code></td>
    <td>The state the pipe is in. (RUNNING, STOPPED, CREATING, UPDATING, DELETING, STARTING, STOPPING, CREATE_FAILED, UPDATE_FAILED, START_FAILED, STOP_FAILED, DELETE_FAILED, CREATE_ROLLBACK_FAILED, DELETE_ROLLBACK_FAILED, UPDATE_ROLLBACK_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="DesiredState" /></td>
    <td><code>string</code></td>
    <td>The state the pipe should be in. (RUNNING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="Enrichment" /></td>
    <td><code>string</code></td>
    <td>The ARN of the enrichment resource. (pattern: &lt;code&gt;$|arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z&#93;&#123;2,4&#125;((-gov)|(-de)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+(-\d&#123;1&#125;)?)?:(\d&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the pipe was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipe. (pattern: &lt;code&gt;&#91;\.\-_A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The ARN of the source resource. (pattern: &lt;code&gt;smk:​//((&#91;a-zA-Z0-9&#93;|&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-&#93;*&#91;a-zA-Z0-9&#93;)\.)*(&#91;A-Za-z0-9&#93;|&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-&#93;*&#91;A-Za-z0-9&#93;):&#91;0-9&#93;&#123;1,5&#125;|arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z&#93;&#123;2,4&#125;((-gov)|(-de)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+(-\d&#123;1&#125;)?)?:(\d&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>The reason the pipe is in its current state. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Target" /></td>
    <td><code>string</code></td>
    <td>The ARN of the target resource. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z&#93;&#123;2,4&#125;((-gov)|(-de)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+(-\d&#123;1&#125;)?)?:(\d&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
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
    <td><a href="#describe_pipe"><CopyableCode code="describe_pipe" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the information about an existing pipe. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.</td>
</tr>
<tr>
    <td><a href="#list_pipes"><CopyableCode code="list_pipes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NamePrefix"><code>NamePrefix</code></a>, <a href="#parameter-DesiredState"><code>DesiredState</code></a>, <a href="#parameter-CurrentState"><code>CurrentState</code></a>, <a href="#parameter-SourcePrefix"><code>SourcePrefix</code></a>, <a href="#parameter-TargetPrefix"><code>TargetPrefix</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Limit"><code>Limit</code></a></td>
    <td>Get the pipes associated with this account. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.</td>
</tr>
<tr>
    <td><a href="#create_pipe"><CopyableCode code="create_pipe" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.</td>
</tr>
<tr>
    <td><a href="#update_pipe"><CopyableCode code="update_pipe" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Update an existing pipe. When you call UpdatePipe, EventBridge only the updates fields you have specified in the request; the rest remain unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the SourceParameters, EnrichmentParameters, or TargetParameters objects. For example, DynamoDBStreamParameters or EventBridgeEventBusParameters. EventBridge updates the fields in these objects atomically as one and overrides existing values. This is by design, and means that if you don't specify an optional field in one of these Parameters objects, EventBridge sets that field to its system-default value during the update. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_pipe"><CopyableCode code="delete_pipe" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an existing pipe. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipe.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CurrentState">
    <td><CopyableCode code="CurrentState" /></td>
    <td><code>string</code></td>
    <td>The state the pipe is in.</td>
</tr>
<tr id="parameter-DesiredState">
    <td><CopyableCode code="DesiredState" /></td>
    <td><code>string</code></td>
    <td>The state the pipe should be in.</td>
</tr>
<tr id="parameter-Limit">
    <td><CopyableCode code="Limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of pipes to include in the response.</td>
</tr>
<tr id="parameter-NamePrefix">
    <td><CopyableCode code="NamePrefix" /></td>
    <td><code>string</code></td>
    <td>A value that will return a subset of the pipes associated with this account. For example, "NamePrefix": "ABC" will return all endpoints with "ABC" in the name.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
<tr id="parameter-SourcePrefix">
    <td><CopyableCode code="SourcePrefix" /></td>
    <td><code>string</code></td>
    <td>The prefix matching the pipe source.</td>
</tr>
<tr id="parameter-TargetPrefix">
    <td><CopyableCode code="TargetPrefix" /></td>
    <td><code>string</code></td>
    <td>The prefix matching the pipe target.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_pipe"
    values={[
        { label: 'describe_pipe', value: 'describe_pipe' },
        { label: 'list_pipes', value: 'list_pipes' }
    ]}
>
<TabItem value="describe_pipe">

Get the information about an existing pipe. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.

```sql
SELECT
Arn,
CreationTime,
CurrentState,
Description,
DesiredState,
Enrichment,
EnrichmentParameters,
KmsKeyIdentifier,
LastModifiedTime,
LogConfiguration,
Name,
RoleArn,
Source,
SourceParameters,
StateReason,
Tags,
Target,
TargetParameters
FROM aws.pipes.pipes
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pipes">

Get the pipes associated with this account. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.

```sql
SELECT
Arn,
CreationTime,
CurrentState,
DesiredState,
Enrichment,
LastModifiedTime,
Name,
Source,
StateReason,
Target
FROM aws.pipes.pipes
WHERE region = '{{ region }}' -- required
AND NamePrefix = '{{ NamePrefix }}'
AND DesiredState = '{{ DesiredState }}'
AND CurrentState = '{{ CurrentState }}'
AND SourcePrefix = '{{ SourcePrefix }}'
AND TargetPrefix = '{{ TargetPrefix }}'
AND NextToken = '{{ NextToken }}'
AND Limit = '{{ Limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pipe"
    values={[
        { label: 'create_pipe', value: 'create_pipe' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pipe">

Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.

```sql
INSERT INTO aws.pipes.pipes (
Description,
DesiredState,
Source,
SourceParameters,
Enrichment,
EnrichmentParameters,
Target,
TargetParameters,
RoleArn,
Tags,
LogConfiguration,
KmsKeyIdentifier,
name,
region
)
SELECT 
'{{ Description }}',
'{{ DesiredState }}',
'{{ Source }}',
'{{ SourceParameters }}',
'{{ Enrichment }}',
'{{ EnrichmentParameters }}',
'{{ Target }}',
'{{ TargetParameters }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ LogConfiguration }}',
'{{ KmsKeyIdentifier }}',
'{{ name }}',
'{{ region }}'
RETURNING
Arn,
CreationTime,
CurrentState,
DesiredState,
LastModifiedTime,
Name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pipes
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the pipes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pipes resource.
    - name: Description
      value: "{{ Description }}"
    - name: DesiredState
      value: "{{ DesiredState }}"
      valid_values: ['RUNNING', 'STOPPED']
    - name: Source
      value: "{{ Source }}"
    - name: SourceParameters
      description: |
        The parameters required to set up a source for your pipe.
      value:
        FilterCriteria:
          Filters:
            - Pattern: "{{ Pattern }}"
        KinesisStreamParameters:
          BatchSize: {{ BatchSize }}
          DeadLetterConfig:
            Arn: "{{ Arn }}"
          OnPartialBatchItemFailure: "{{ OnPartialBatchItemFailure }}"
          MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
          MaximumRecordAgeInSeconds: {{ MaximumRecordAgeInSeconds }}
          MaximumRetryAttempts: {{ MaximumRetryAttempts }}
          ParallelizationFactor: {{ ParallelizationFactor }}
          StartingPosition: "{{ StartingPosition }}"
          StartingPositionTimestamp: "{{ StartingPositionTimestamp }}"
        DynamoDBStreamParameters:
          BatchSize: {{ BatchSize }}
          DeadLetterConfig:
            Arn: "{{ Arn }}"
          OnPartialBatchItemFailure: "{{ OnPartialBatchItemFailure }}"
          MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
          MaximumRecordAgeInSeconds: {{ MaximumRecordAgeInSeconds }}
          MaximumRetryAttempts: {{ MaximumRetryAttempts }}
          ParallelizationFactor: {{ ParallelizationFactor }}
          StartingPosition: "{{ StartingPosition }}"
        SqsQueueParameters:
          BatchSize: {{ BatchSize }}
          MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
        ActiveMQBrokerParameters:
          Credentials:
            BasicAuth: "{{ BasicAuth }}"
          QueueName: "{{ QueueName }}"
          BatchSize: {{ BatchSize }}
          MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
        RabbitMQBrokerParameters:
          Credentials:
            BasicAuth: "{{ BasicAuth }}"
          QueueName: "{{ QueueName }}"
          VirtualHost: "{{ VirtualHost }}"
          BatchSize: {{ BatchSize }}
          MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
        ManagedStreamingKafkaParameters:
          TopicName: "{{ TopicName }}"
          StartingPosition: "{{ StartingPosition }}"
          BatchSize: {{ BatchSize }}
          MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
          ConsumerGroupID: "{{ ConsumerGroupID }}"
          Credentials:
            SaslScram512Auth: "{{ SaslScram512Auth }}"
            ClientCertificateTlsAuth: "{{ ClientCertificateTlsAuth }}"
        SelfManagedKafkaParameters:
          TopicName: "{{ TopicName }}"
          StartingPosition: "{{ StartingPosition }}"
          AdditionalBootstrapServers:
            - "{{ AdditionalBootstrapServers }}"
          BatchSize: {{ BatchSize }}
          MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
          ConsumerGroupID: "{{ ConsumerGroupID }}"
          Credentials:
            BasicAuth: "{{ BasicAuth }}"
            SaslScram512Auth: "{{ SaslScram512Auth }}"
            SaslScram256Auth: "{{ SaslScram256Auth }}"
            ClientCertificateTlsAuth: "{{ ClientCertificateTlsAuth }}"
          ServerRootCaCertificate: "{{ ServerRootCaCertificate }}"
          Vpc:
            Subnets:
              - "{{ Subnets }}"
            SecurityGroup:
              - "{{ SecurityGroup }}"
    - name: Enrichment
      value: "{{ Enrichment }}"
    - name: EnrichmentParameters
      description: |
        The parameters required to set up enrichment on your pipe.
      value:
        InputTemplate: "{{ InputTemplate }}"
        HttpParameters:
          PathParameterValues:
            - "{{ PathParameterValues }}"
          HeaderParameters: "{{ HeaderParameters }}"
          QueryStringParameters: "{{ QueryStringParameters }}"
    - name: Target
      value: "{{ Target }}"
    - name: TargetParameters
      description: |
        The parameters required to set up a target for your pipe. For more information about pipe target parameters, including how to use dynamic path parameters, see Target parameters in the Amazon EventBridge User Guide.
      value:
        InputTemplate: "{{ InputTemplate }}"
        LambdaFunctionParameters:
          InvocationType: "{{ InvocationType }}"
        StepFunctionStateMachineParameters:
          InvocationType: "{{ InvocationType }}"
        KinesisStreamParameters:
          PartitionKey: "{{ PartitionKey }}"
        EcsTaskParameters:
          TaskDefinitionArn: "{{ TaskDefinitionArn }}"
          TaskCount: {{ TaskCount }}
          LaunchType: "{{ LaunchType }}"
          NetworkConfiguration:
            awsvpcConfiguration:
              Subnets:
                - "{{ Subnets }}"
              SecurityGroups:
                - "{{ SecurityGroups }}"
              AssignPublicIp: "{{ AssignPublicIp }}"
          PlatformVersion: "{{ PlatformVersion }}"
          Group: "{{ Group }}"
          CapacityProviderStrategy:
            - capacityProvider: "{{ capacityProvider }}"
              weight: {{ weight }}
              base: {{ base }}
          EnableECSManagedTags: {{ EnableECSManagedTags }}
          EnableExecuteCommand: {{ EnableExecuteCommand }}
          PlacementConstraints:
            - type_: "{{ type_ }}"
              expression: "{{ expression }}"
          PlacementStrategy:
            - type_: "{{ type_ }}"
              field: "{{ field }}"
          PropagateTags: "{{ PropagateTags }}"
          ReferenceId: "{{ ReferenceId }}"
          Overrides:
            ContainerOverrides:
              - Command: "{{ Command }}"
                Cpu: {{ Cpu }}
                Environment: "{{ Environment }}"
                EnvironmentFiles: "{{ EnvironmentFiles }}"
                Memory: {{ Memory }}
                MemoryReservation: {{ MemoryReservation }}
                Name: "{{ Name }}"
                ResourceRequirements: "{{ ResourceRequirements }}"
            Cpu: "{{ Cpu }}"
            EphemeralStorage:
              sizeInGiB: {{ sizeInGiB }}
            ExecutionRoleArn: "{{ ExecutionRoleArn }}"
            InferenceAcceleratorOverrides:
              - deviceName: "{{ deviceName }}"
                deviceType: "{{ deviceType }}"
            Memory: "{{ Memory }}"
            TaskRoleArn: "{{ TaskRoleArn }}"
          Tags:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
        BatchJobParameters:
          JobDefinition: "{{ JobDefinition }}"
          JobName: "{{ JobName }}"
          ArrayProperties:
            Size: {{ Size }}
          RetryStrategy:
            Attempts: {{ Attempts }}
          ContainerOverrides:
            Command:
              - "{{ Command }}"
            Environment:
              - Name: "{{ Name }}"
                Value: "{{ Value }}"
            InstanceType: "{{ InstanceType }}"
            ResourceRequirements:
              - Type: "{{ Type }}"
                Value: "{{ Value }}"
          DependsOn:
            - JobId: "{{ JobId }}"
              Type: "{{ Type }}"
          Parameters: "{{ Parameters }}"
        SqsQueueParameters:
          MessageGroupId: "{{ MessageGroupId }}"
          MessageDeduplicationId: "{{ MessageDeduplicationId }}"
        HttpParameters:
          PathParameterValues:
            - "{{ PathParameterValues }}"
          HeaderParameters: "{{ HeaderParameters }}"
          QueryStringParameters: "{{ QueryStringParameters }}"
        RedshiftDataParameters:
          SecretManagerArn: "{{ SecretManagerArn }}"
          Database: "{{ Database }}"
          DbUser: "{{ DbUser }}"
          StatementName: "{{ StatementName }}"
          WithEvent: {{ WithEvent }}
          Sqls:
            - "{{ Sqls }}"
        SageMakerPipelineParameters:
          PipelineParameterList:
            - Name: "{{ Name }}"
              Value: "{{ Value }}"
        EventBridgeEventBusParameters:
          EndpointId: "{{ EndpointId }}"
          DetailType: "{{ DetailType }}"
          Source: "{{ Source }}"
          Resources:
            - "{{ Resources }}"
          Time: "{{ Time }}"
        CloudWatchLogsParameters:
          LogStreamName: "{{ LogStreamName }}"
          Timestamp: "{{ Timestamp }}"
        TimestreamParameters:
          TimeValue: "{{ TimeValue }}"
          EpochTimeUnit: "{{ EpochTimeUnit }}"
          TimeFieldType: "{{ TimeFieldType }}"
          TimestampFormat: "{{ TimestampFormat }}"
          VersionValue: "{{ VersionValue }}"
          DimensionMappings:
            - DimensionValue: "{{ DimensionValue }}"
              DimensionValueType: "{{ DimensionValueType }}"
              DimensionName: "{{ DimensionName }}"
          SingleMeasureMappings:
            - MeasureValue: "{{ MeasureValue }}"
              MeasureValueType: "{{ MeasureValueType }}"
              MeasureName: "{{ MeasureName }}"
          MultiMeasureMappings:
            - MultiMeasureName: "{{ MultiMeasureName }}"
              MultiMeasureAttributeMappings: "{{ MultiMeasureAttributeMappings }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: LogConfiguration
      description: |
        Specifies the logging configuration settings for the pipe. When you call UpdatePipe, EventBridge updates the fields in the PipeLogConfigurationParameters object atomically as one and overrides existing values. This is by design. If you don't specify an optional field in any of the Amazon Web Services service parameters objects (CloudwatchLogsLogDestinationParameters, FirehoseLogDestinationParameters, or S3LogDestinationParameters), EventBridge sets that field to its system-default value during the update. For example, suppose when you created the pipe you specified a Firehose stream log destination. You then update the pipe to add an Amazon S3 log destination. In addition to specifying the S3LogDestinationParameters for the new log destination, you must also specify the fields in the FirehoseLogDestinationParameters object in order to retain the Firehose stream log destination. For more information on generating pipe log records, see Log EventBridge Pipes in the Amazon EventBridge User Guide.
      value:
        S3LogDestination:
          BucketName: "{{ BucketName }}"
          BucketOwner: "{{ BucketOwner }}"
          OutputFormat: "{{ OutputFormat }}"
          Prefix: "{{ Prefix }}"
        FirehoseLogDestination:
          DeliveryStreamArn: "{{ DeliveryStreamArn }}"
        CloudwatchLogsLogDestination:
          LogGroupArn: "{{ LogGroupArn }}"
        Level: "{{ Level }}"
        IncludeExecutionData:
          - "{{ IncludeExecutionData }}"
    - name: KmsKeyIdentifier
      value: "{{ KmsKeyIdentifier }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pipe"
    values={[
        { label: 'update_pipe', value: 'update_pipe' }
    ]}
>
<TabItem value="update_pipe">

Update an existing pipe. When you call UpdatePipe, EventBridge only the updates fields you have specified in the request; the rest remain unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the SourceParameters, EnrichmentParameters, or TargetParameters objects. For example, DynamoDBStreamParameters or EventBridgeEventBusParameters. EventBridge updates the fields in these objects atomically as one and overrides existing values. This is by design, and means that if you don't specify an optional field in one of these Parameters objects, EventBridge sets that field to its system-default value during the update. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.

```sql
UPDATE aws.pipes.pipes
SET 
Description = '{{ Description }}',
DesiredState = '{{ DesiredState }}',
SourceParameters = '{{ SourceParameters }}',
Enrichment = '{{ Enrichment }}',
EnrichmentParameters = '{{ EnrichmentParameters }}',
Target = '{{ Target }}',
TargetParameters = '{{ TargetParameters }}',
RoleArn = '{{ RoleArn }}',
LogConfiguration = '{{ LogConfiguration }}',
KmsKeyIdentifier = '{{ KmsKeyIdentifier }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND RoleArn = '{{ RoleArn }}' --required
RETURNING
Arn,
CreationTime,
CurrentState,
DesiredState,
LastModifiedTime,
Name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pipe"
    values={[
        { label: 'delete_pipe', value: 'delete_pipe' }
    ]}
>
<TabItem value="delete_pipe">

Delete an existing pipe. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide.

```sql
DELETE FROM aws.pipes.pipes
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
