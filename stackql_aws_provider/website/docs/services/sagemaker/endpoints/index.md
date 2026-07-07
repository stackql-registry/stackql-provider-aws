--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
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

Creates, updates, deletes, gets or lists an <code>endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_endpoint"
    values={[
        { label: 'describe_endpoint', value: 'describe_endpoint' },
        { label: 'list_endpoints', value: 'list_endpoints' }
    ]}
>
<TabItem value="describe_endpoint">

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
    <td><CopyableCode code="AsyncInferenceConfig" /></td>
    <td><code>object</code></td>
    <td>Returns the description of an endpoint configuration created using the CreateEndpointConfig API.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataCaptureConfig" /></td>
    <td><code>object</code></td>
    <td>The currently active data capture configuration used by your Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:endpoint/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointConfigName" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint configuration associated with this endpoint. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointName" /></td>
    <td><code>string</code></td>
    <td>Name of the endpoint. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the endpoint. OutOfService: Endpoint is not available to take incoming requests. Creating: CreateEndpoint is executing. Updating: UpdateEndpoint or UpdateEndpointWeightsAndCapacities is executing. SystemUpdating: Endpoint is undergoing maintenance and cannot be updated or deleted or re-scaled until it has completed. This maintenance operation does not change any customer-specified values such as VPC config, KMS encryption, model, instance type, or instance count. RollingBack: Endpoint fails to scale up or down or change its variant weight and is in the process of rolling back to its previous configuration. Once the rollback completes, endpoint returns to an InService status. This transitional status only applies to an endpoint that has autoscaling enabled and is undergoing variant weight or capacity changes as part of an UpdateEndpointWeightsAndCapacities call or when the UpdateEndpointWeightsAndCapacities operation is called explicitly. InService: Endpoint is available to process incoming requests. Deleting: DeleteEndpoint is executing. Failed: Endpoint could not be created, updated, or re-scaled. Use the FailureReason value returned by DescribeEndpoint for information about the failure. DeleteEndpoint is the only operation that can be performed on a failed endpoint. UpdateRollbackFailed: Both the rolling deployment and auto-rollback failed. Your endpoint is in service with a mix of the old and new endpoint configurations. For information about how to remedy this issue and restore the endpoint's status to InService, see Rolling Deployments. (OutOfService, Creating, Updating, SystemUpdating, RollingBack, InService, Deleting, Failed, UpdateRollbackFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="ExplainerConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration parameters for an explainer.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If the status of the endpoint is Failed, the reason why it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="LastDeploymentConfig" /></td>
    <td><code>object</code></td>
    <td>The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the endpoint was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricsConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration parameters for utilization metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="PendingDeploymentSummary" /></td>
    <td><code>object</code></td>
    <td>Returns the summary of an in-progress deployment. This field is only returned when the endpoint is creating or updating with a new endpoint configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductionVariants" /></td>
    <td><code>array</code></td>
    <td>An array of ProductionVariantSummary objects, one for each model hosted behind this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="ShadowProductionVariants" /></td>
    <td><code>array</code></td>
    <td>An array of ProductionVariantSummary objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_endpoints">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:endpoint/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the endpoint. OutOfService: Endpoint is not available to take incoming requests. Creating: CreateEndpoint is executing. Updating: UpdateEndpoint or UpdateEndpointWeightsAndCapacities is executing. SystemUpdating: Endpoint is undergoing maintenance and cannot be updated or deleted or re-scaled until it has completed. This maintenance operation does not change any customer-specified values such as VPC config, KMS encryption, model, instance type, or instance count. RollingBack: Endpoint fails to scale up or down or change its variant weight and is in the process of rolling back to its previous configuration. Once the rollback completes, endpoint returns to an InService status. This transitional status only applies to an endpoint that has autoscaling enabled and is undergoing variant weight or capacity changes as part of an UpdateEndpointWeightsAndCapacities call or when the UpdateEndpointWeightsAndCapacities operation is called explicitly. InService: Endpoint is available to process incoming requests. Deleting: DeleteEndpoint is executing. Failed: Endpoint could not be created, updated, or re-scaled. Use DescribeEndpointOutput$FailureReason for information about the failure. DeleteEndpoint is the only operation that can be performed on a failed endpoint. To get a list of endpoints with a specified status, use the StatusEquals filter with a call to ListEndpoints. (OutOfService, Creating, Updating, SystemUpdating, RollingBack, InService, Deleting, Failed, UpdateRollbackFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that shows when the endpoint was last modified.</td>
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
    <td><a href="#describe_endpoint"><CopyableCode code="describe_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the description of an endpoint.</td>
</tr>
<tr>
    <td><a href="#list_endpoints"><CopyableCode code="list_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists endpoints.</td>
</tr>
<tr>
    <td><a href="#create_endpoint"><CopyableCode code="create_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-EndpointConfigName"><code>EndpointConfigName</code></a></td>
    <td></td>
    <td>Creates an endpoint using the endpoint configuration specified in the request. SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the CreateEndpointConfig API. Use this API to deploy models using SageMaker hosting services. You must not delete an EndpointConfig that is in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. To update an endpoint, you must create a new EndpointConfig. The endpoint name must be unique within an Amazon Web Services Region in your Amazon Web Services account. When it receives the request, SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them. When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read. When SageMaker receives the request, it sets the endpoint status to Creating. After it creates the endpoint, it sets the status to InService. SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the DescribeEndpoint API. If any of the models hosted at this endpoint get model data from an Amazon S3 location, SageMaker uses Amazon Web Services Security Token Service to download model artifacts from the S3 path you provided. Amazon Web Services STS is activated in your Amazon Web Services account by default. If you previously deactivated Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS for that region. For more information, see Activating and Deactivating Amazon Web Services STS in an Amazon Web Services Region in the Amazon Web Services Identity and Access Management User Guide. To add the IAM role policies for using this API operation, go to the IAM console, and choose Roles in the left navigation pane. Search the IAM role that you want to grant access to use the CreateEndpoint and CreateEndpointConfig API operations, add the following policies to the role. Option 1: For a full SageMaker access, search and attach the AmazonSageMakerFullAccess policy. Option 2: For granting a limited access to an IAM role, paste the following Action elements manually into the JSON file of the IAM role: "Action": &#91;"sagemaker:CreateEndpoint", "sagemaker:CreateEndpointConfig"&#93; "Resource": &#91; "arn:aws:sagemaker:region:account-id:endpoint/endpointName" "arn:aws:sagemaker:region:account-id:endpoint-config/endpointConfigName" &#93; For more information, see SageMaker API Permissions: Actions, Permissions, and Resources Reference.</td>
</tr>
<tr>
    <td><a href="#update_endpoint"><CopyableCode code="update_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-EndpointConfigName"><code>EndpointConfigName</code></a></td>
    <td></td>
    <td>Deploys the EndpointConfig specified in the request to a new fleet of instances. SageMaker shifts endpoint traffic to the new instances with the updated endpoint configuration and then deletes the old instances using the previous EndpointConfig (there is no availability loss). For more information about how to control the update and traffic shifting process, see Update models in production. When SageMaker receives the request, it sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API. You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. To update an endpoint, you must create a new EndpointConfig. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</td>
</tr>
<tr>
    <td><a href="#update_endpoint_weights_and_capacities"><CopyableCode code="update_endpoint_weights_and_capacities" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-DesiredWeightsAndCapacities"><code>DesiredWeightsAndCapacities</code></a></td>
    <td></td>
    <td>Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, SageMaker sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API.</td>
</tr>
<tr>
    <td><a href="#delete_endpoint"><CopyableCode code="delete_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an endpoint. SageMaker frees up all of the resources that were deployed when the endpoint was created. SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the RevokeGrant API call. When you delete your endpoint, SageMaker asynchronously deletes associated endpoint resources such as KMS key grants. You might still see these resources in your account for a few minutes after deleting your endpoint. Do not delete or revoke the permissions for your ExecutionRoleArn , otherwise SageMaker cannot delete these resources.</td>
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
    defaultValue="describe_endpoint"
    values={[
        { label: 'describe_endpoint', value: 'describe_endpoint' },
        { label: 'list_endpoints', value: 'list_endpoints' }
    ]}
>
<TabItem value="describe_endpoint">

Returns the description of an endpoint.

```sql
SELECT
AsyncInferenceConfig,
CreationTime,
DataCaptureConfig,
EndpointArn,
EndpointConfigName,
EndpointName,
EndpointStatus,
ExplainerConfig,
FailureReason,
LastDeploymentConfig,
LastModifiedTime,
MetricsConfig,
PendingDeploymentSummary,
ProductionVariants,
ShadowProductionVariants
FROM aws.sagemaker.endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_endpoints">

Lists endpoints.

```sql
SELECT
CreationTime,
EndpointArn,
EndpointName,
EndpointStatus,
LastModifiedTime
FROM aws.sagemaker.endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_endpoint"
    values={[
        { label: 'create_endpoint', value: 'create_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_endpoint">

Creates an endpoint using the endpoint configuration specified in the request. SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the CreateEndpointConfig API. Use this API to deploy models using SageMaker hosting services. You must not delete an EndpointConfig that is in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. To update an endpoint, you must create a new EndpointConfig. The endpoint name must be unique within an Amazon Web Services Region in your Amazon Web Services account. When it receives the request, SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them. When you call CreateEndpoint, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting Eventually Consistent Reads , the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call DescribeEndpointConfig before calling CreateEndpoint to minimize the potential impact of a DynamoDB eventually consistent read. When SageMaker receives the request, it sets the endpoint status to Creating. After it creates the endpoint, it sets the status to InService. SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the DescribeEndpoint API. If any of the models hosted at this endpoint get model data from an Amazon S3 location, SageMaker uses Amazon Web Services Security Token Service to download model artifacts from the S3 path you provided. Amazon Web Services STS is activated in your Amazon Web Services account by default. If you previously deactivated Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS for that region. For more information, see Activating and Deactivating Amazon Web Services STS in an Amazon Web Services Region in the Amazon Web Services Identity and Access Management User Guide. To add the IAM role policies for using this API operation, go to the IAM console, and choose Roles in the left navigation pane. Search the IAM role that you want to grant access to use the CreateEndpoint and CreateEndpointConfig API operations, add the following policies to the role. Option 1: For a full SageMaker access, search and attach the AmazonSageMakerFullAccess policy. Option 2: For granting a limited access to an IAM role, paste the following Action elements manually into the JSON file of the IAM role: "Action": ["sagemaker:CreateEndpoint", "sagemaker:CreateEndpointConfig"] "Resource": [ "arn:aws:sagemaker:region:account-id:endpoint/endpointName" "arn:aws:sagemaker:region:account-id:endpoint-config/endpointConfigName" ] For more information, see SageMaker API Permissions: Actions, Permissions, and Resources Reference.

```sql
INSERT INTO aws.sagemaker.endpoints (
EndpointName,
EndpointConfigName,
DeploymentConfig,
Tags,
region
)
SELECT 
'{{ EndpointName }}' /* required */,
'{{ EndpointConfigName }}' /* required */,
'{{ DeploymentConfig }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
EndpointArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the endpoints resource.
    - name: EndpointName
      value: "{{ EndpointName }}"
      description: |
        The name of the endpoint.The name must be unique within an Amazon Web Services Region in your Amazon Web Services account. The name is case-insensitive in CreateEndpoint, but the case is preserved and must be matched in InvokeEndpoint.
    - name: EndpointConfigName
      value: "{{ EndpointConfigName }}"
      description: |
        The name of an endpoint configuration. For more information, see CreateEndpointConfig.
    - name: DeploymentConfig
      description: |
        The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
      value:
        BlueGreenUpdatePolicy:
          TrafficRoutingConfiguration:
            Type: "{{ Type }}"
            WaitIntervalInSeconds: {{ WaitIntervalInSeconds }}
            CanarySize:
              Type: "{{ Type }}"
              Value: {{ Value }}
            LinearStepSize:
              Type: "{{ Type }}"
              Value: {{ Value }}
          TerminationWaitInSeconds: {{ TerminationWaitInSeconds }}
          MaximumExecutionTimeoutInSeconds: {{ MaximumExecutionTimeoutInSeconds }}
        RollingUpdatePolicy:
          MaximumBatchSize:
            Type: "{{ Type }}"
            Value: {{ Value }}
          WaitIntervalInSeconds: {{ WaitIntervalInSeconds }}
          MaximumExecutionTimeoutInSeconds: {{ MaximumExecutionTimeoutInSeconds }}
          RollbackMaximumBatchSize:
            Type: "{{ Type }}"
            Value: {{ Value }}
        AutoRollbackConfiguration:
          Alarms:
            - AlarmName: "{{ AlarmName }}"
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_endpoint"
    values={[
        { label: 'update_endpoint', value: 'update_endpoint' },
        { label: 'update_endpoint_weights_and_capacities', value: 'update_endpoint_weights_and_capacities' }
    ]}
>
<TabItem value="update_endpoint">

Deploys the EndpointConfig specified in the request to a new fleet of instances. SageMaker shifts endpoint traffic to the new instances with the updated endpoint configuration and then deletes the old instances using the previous EndpointConfig (there is no availability loss). For more information about how to control the update and traffic shifting process, see Update models in production. When SageMaker receives the request, it sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API. You must not delete an EndpointConfig in use by an endpoint that is live or while the UpdateEndpoint or CreateEndpoint operations are being performed on the endpoint. To update an endpoint, you must create a new EndpointConfig. If you delete the EndpointConfig of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.

```sql
UPDATE aws.sagemaker.endpoints
SET 
EndpointName = '{{ EndpointName }}',
EndpointConfigName = '{{ EndpointConfigName }}',
RetainAllVariantProperties = {{ RetainAllVariantProperties }},
ExcludeRetainedVariantProperties = '{{ ExcludeRetainedVariantProperties }}',
DeploymentConfig = '{{ DeploymentConfig }}',
RetainDeploymentConfig = {{ RetainDeploymentConfig }}
WHERE 
region = '{{ region }}' --required
AND EndpointName = '{{ EndpointName }}' --required
AND EndpointConfigName = '{{ EndpointConfigName }}' --required
RETURNING
EndpointArn;
```
</TabItem>
<TabItem value="update_endpoint_weights_and_capacities">

Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, SageMaker sets the endpoint status to Updating. After updating the endpoint, it sets the status to InService. To check the status of an endpoint, use the DescribeEndpoint API.

```sql
UPDATE aws.sagemaker.endpoints
SET 
EndpointName = '{{ EndpointName }}',
DesiredWeightsAndCapacities = '{{ DesiredWeightsAndCapacities }}'
WHERE 
region = '{{ region }}' --required
AND EndpointName = '{{ EndpointName }}' --required
AND DesiredWeightsAndCapacities = '{{ DesiredWeightsAndCapacities }}' --required
RETURNING
EndpointArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_endpoint"
    values={[
        { label: 'delete_endpoint', value: 'delete_endpoint' }
    ]}
>
<TabItem value="delete_endpoint">

Deletes an endpoint. SageMaker frees up all of the resources that were deployed when the endpoint was created. SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the RevokeGrant API call. When you delete your endpoint, SageMaker asynchronously deletes associated endpoint resources such as KMS key grants. You might still see these resources in your account for a few minutes after deleting your endpoint. Do not delete or revoke the permissions for your ExecutionRoleArn , otherwise SageMaker cannot delete these resources.

```sql
DELETE FROM aws.sagemaker.endpoints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
