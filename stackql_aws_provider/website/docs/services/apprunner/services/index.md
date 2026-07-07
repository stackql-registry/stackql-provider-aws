--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apprunner.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service"
    values={[
        { label: 'describe_service', value: 'describe_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="describe_service">

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
    <td><CopyableCode code="AutoScalingConfigurationSummary" /></td>
    <td><code>object</code></td>
    <td>Summary information for the App Runner automatic scaling configuration resource that's associated with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the App Runner service was created. It's in the Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the App Runner service was deleted. It's in the Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The encryption key that App Runner uses to encrypt the service logs and the copy of the source repository that App Runner maintains for the service. It can be either a customer-provided encryption key or an Amazon Web Services managed key.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckConfiguration" /></td>
    <td><code>object</code></td>
    <td>The settings for the health check that App Runner performs to monitor the health of this service.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The runtime configuration of instances (scaling units) of this service.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration settings related to network traffic of the web application that this service runs.</td>
</tr>
<tr>
    <td><CopyableCode code="ObservabilityConfiguration" /></td>
    <td><code>object</code></td>
    <td>The observability configuration of this service.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of this service. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\\.&#93;&#123;0,63&#125;:&#91;0-9&#93;&#123;12&#125;:(\w|\/|-)&#123;1,1011&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceId" /></td>
    <td><code>string</code></td>
    <td>An ID that App Runner generated for this service. It's unique within the Amazon Web Services Region. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;1-5&#93;&#91;0-9a-fA-F&#93;&#123;3&#125;-&#91;89abAB&#93;&#91;0-9a-fA-F&#93;&#123;3&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceName" /></td>
    <td><code>string</code></td>
    <td>The customer-provided service name. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9-_&#93;&#123;3,39&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUrl" /></td>
    <td><code>string</code></td>
    <td>A subdomain URL that App Runner generated for this service. You can use this URL to access your service web application. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The source deployed to the App Runner service. It can be a code or an image repository.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current state of the App Runner service. These particular values mean the following. CREATE_FAILED – The service failed to create. The failed service isn't usable, and still counts towards your service quota. To troubleshoot this failure, read the failure events and logs, change any parameters that need to be fixed, and rebuild your service using UpdateService. DELETE_FAILED – The service failed to delete and can't be successfully recovered. Retry the service deletion call to ensure that all related resources are removed. (CREATE_FAILED, RUNNING, DELETED, DELETE_FAILED, PAUSED, OPERATION_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the App Runner service was last updated at. It's in the Unix time stamp format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_services">

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
    <td><CopyableCode code="ServiceSummaryList" /></td>
    <td><code>array</code></td>
    <td>A list of service summary information records. In a paginated request, the request returns up to MaxResults records for each call.</td>
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
    <td><a href="#describe_service"><CopyableCode code="describe_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Return a full description of an App Runner service.</td>
</tr>
<tr>
    <td><a href="#list_services"><CopyableCode code="list_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of running App Runner services in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_service"><CopyableCode code="create_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceName"><code>ServiceName</code></a>, <a href="#parameter-SourceConfiguration"><code>SourceConfiguration</code></a></td>
    <td></td>
    <td>Create an App Runner service. After the service is created, the action also automatically starts a deployment. This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress.</td>
</tr>
<tr>
    <td><a href="#update_service"><CopyableCode code="update_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceArn"><code>ServiceArn</code></a></td>
    <td></td>
    <td>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service. To update the tags applied to your service, use the separate actions TagResource and UntagResource. This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress.</td>
</tr>
<tr>
    <td><a href="#delete_service"><CopyableCode code="delete_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an App Runner service. This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress. Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete.</td>
</tr>
<tr>
    <td><a href="#pause_service"><CopyableCode code="pause_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceArn"><code>ServiceArn</code></a></td>
    <td></td>
    <td>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed). This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress.</td>
</tr>
<tr>
    <td><a href="#resume_service"><CopyableCode code="resume_service" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceArn"><code>ServiceArn</code></a></td>
    <td></td>
    <td>Resume an active App Runner service. App Runner provisions compute capacity for the service. This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress.</td>
</tr>
<tr>
    <td><a href="#start_deployment"><CopyableCode code="start_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceArn"><code>ServiceArn</code></a></td>
    <td></td>
    <td>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service. For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance. This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress.</td>
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
    defaultValue="describe_service"
    values={[
        { label: 'describe_service', value: 'describe_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="describe_service">

Return a full description of an App Runner service.

```sql
SELECT
AutoScalingConfigurationSummary,
CreatedAt,
DeletedAt,
EncryptionConfiguration,
HealthCheckConfiguration,
InstanceConfiguration,
NetworkConfiguration,
ObservabilityConfiguration,
ServiceArn,
ServiceId,
ServiceName,
ServiceUrl,
SourceConfiguration,
Status,
UpdatedAt
FROM aws.apprunner.services
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_services">

Returns a list of running App Runner services in your Amazon Web Services account.

```sql
SELECT
NextToken,
ServiceSummaryList
FROM aws.apprunner.services
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service"
    values={[
        { label: 'create_service', value: 'create_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service">

Create an App Runner service. After the service is created, the action also automatically starts a deployment. This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress.

```sql
INSERT INTO aws.apprunner.services (
ServiceName,
SourceConfiguration,
InstanceConfiguration,
Tags,
EncryptionConfiguration,
HealthCheckConfiguration,
AutoScalingConfigurationArn,
NetworkConfiguration,
ObservabilityConfiguration,
region
)
SELECT 
'{{ ServiceName }}' /* required */,
'{{ SourceConfiguration }}' /* required */,
'{{ InstanceConfiguration }}',
'{{ Tags }}',
'{{ EncryptionConfiguration }}',
'{{ HealthCheckConfiguration }}',
'{{ AutoScalingConfigurationArn }}',
'{{ NetworkConfiguration }}',
'{{ ObservabilityConfiguration }}',
'{{ region }}'
RETURNING
OperationId,
Service
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: services
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the services resource.
    - name: ServiceName
      value: "{{ ServiceName }}"
      description: |
        A name for the App Runner service. It must be unique across all the running App Runner services in your Amazon Web Services account in the Amazon Web Services Region.
    - name: SourceConfiguration
      description: |
        The source to deploy to the App Runner service. It can be a code or an image repository.
      value:
        CodeRepository:
          RepositoryUrl: "{{ RepositoryUrl }}"
          SourceCodeVersion:
            Type: "{{ Type }}"
            Value: "{{ Value }}"
          CodeConfiguration:
            ConfigurationSource: "{{ ConfigurationSource }}"
            CodeConfigurationValues:
              Runtime: "{{ Runtime }}"
              BuildCommand: "{{ BuildCommand }}"
              StartCommand: "{{ StartCommand }}"
              Port: "{{ Port }}"
              RuntimeEnvironmentVariables: "{{ RuntimeEnvironmentVariables }}"
              RuntimeEnvironmentSecrets: "{{ RuntimeEnvironmentSecrets }}"
          SourceDirectory: "{{ SourceDirectory }}"
        ImageRepository:
          ImageIdentifier: "{{ ImageIdentifier }}"
          ImageConfiguration:
            RuntimeEnvironmentVariables: "{{ RuntimeEnvironmentVariables }}"
            StartCommand: "{{ StartCommand }}"
            Port: "{{ Port }}"
            RuntimeEnvironmentSecrets: "{{ RuntimeEnvironmentSecrets }}"
          ImageRepositoryType: "{{ ImageRepositoryType }}"
        AutoDeploymentsEnabled: {{ AutoDeploymentsEnabled }}
        AuthenticationConfiguration:
          ConnectionArn: "{{ ConnectionArn }}"
          AccessRoleArn: "{{ AccessRoleArn }}"
    - name: InstanceConfiguration
      description: |
        The runtime configuration of instances (scaling units) of your service.
      value:
        Cpu: "{{ Cpu }}"
        Memory: "{{ Memory }}"
        InstanceRoleArn: "{{ InstanceRoleArn }}"
    - name: Tags
      description: |
        An optional list of metadata items that you can associate with the App Runner service resource. A tag is a key-value pair.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: EncryptionConfiguration
      description: |
        An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default, App Runner uses an Amazon Web Services managed key.
      value:
        KmsKey: "{{ KmsKey }}"
    - name: HealthCheckConfiguration
      description: |
        The settings for the health check that App Runner performs to monitor the health of the App Runner service.
      value:
        Protocol: "{{ Protocol }}"
        Path: "{{ Path }}"
        Interval: {{ Interval }}
        Timeout: {{ Timeout }}
        HealthyThreshold: {{ HealthyThreshold }}
        UnhealthyThreshold: {{ UnhealthyThreshold }}
    - name: AutoScalingConfigurationArn
      value: "{{ AutoScalingConfigurationArn }}"
      description: |
        The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner associates the latest revision of a default auto scaling configuration. Specify an ARN with a name and a revision number to associate that revision. For example: arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability/3 Specify just the name to associate the latest revision. For example: arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability
    - name: NetworkConfiguration
      description: |
        Configuration settings related to network traffic of the web application that the App Runner service runs.
      value:
        EgressConfiguration:
          EgressType: "{{ EgressType }}"
          VpcConnectorArn: "{{ VpcConnectorArn }}"
        IngressConfiguration:
          IsPubliclyAccessible: {{ IsPubliclyAccessible }}
        IpAddressType: "{{ IpAddressType }}"
    - name: ObservabilityConfiguration
      description: |
        The observability configuration of your service.
      value:
        ObservabilityEnabled: {{ ObservabilityEnabled }}
        ObservabilityConfigurationArn: "{{ ObservabilityConfigurationArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service"
    values={[
        { label: 'update_service', value: 'update_service' }
    ]}
>
<TabItem value="update_service">

Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service. To update the tags applied to your service, use the separate actions TagResource and UntagResource. This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress.

```sql
UPDATE aws.apprunner.services
SET 
ServiceArn = '{{ ServiceArn }}',
SourceConfiguration = '{{ SourceConfiguration }}',
InstanceConfiguration = '{{ InstanceConfiguration }}',
AutoScalingConfigurationArn = '{{ AutoScalingConfigurationArn }}',
HealthCheckConfiguration = '{{ HealthCheckConfiguration }}',
NetworkConfiguration = '{{ NetworkConfiguration }}',
ObservabilityConfiguration = '{{ ObservabilityConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND ServiceArn = '{{ ServiceArn }}' --required
RETURNING
OperationId,
Service;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service"
    values={[
        { label: 'delete_service', value: 'delete_service' }
    ]}
>
<TabItem value="delete_service">

Delete an App Runner service. This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress. Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete.

```sql
DELETE FROM aws.apprunner.services
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="pause_service"
    values={[
        { label: 'pause_service', value: 'pause_service' },
        { label: 'resume_service', value: 'resume_service' },
        { label: 'start_deployment', value: 'start_deployment' }
    ]}
>
<TabItem value="pause_service">

Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed). This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress.

```sql
EXEC aws.apprunner.services.pause_service 
@region='{{ region }}' --required 
@@json=
'{
"ServiceArn": "{{ ServiceArn }}"
}'
;
```
</TabItem>
<TabItem value="resume_service">

Resume an active App Runner service. App Runner provisions compute capacity for the service. This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress.

```sql
EXEC aws.apprunner.services.resume_service 
@region='{{ region }}' --required 
@@json=
'{
"ServiceArn": "{{ ServiceArn }}"
}'
;
```
</TabItem>
<TabItem value="start_deployment">

Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service. For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance. This is an asynchronous operation. On a successful call, you can use the returned OperationId and the ListOperations call to track the operation's progress.

```sql
EXEC aws.apprunner.services.start_deployment 
@region='{{ region }}' --required 
@@json=
'{
"ServiceArn": "{{ ServiceArn }}"
}'
;
```
</TabItem>
</Tabs>
