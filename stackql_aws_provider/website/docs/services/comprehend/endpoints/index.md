--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - comprehend
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.endpoints" /></td></tr>
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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentInferenceUnits" /></td>
    <td><code>integer</code></td>
    <td>The number of inference units currently used by the model using this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="DataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId). (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DesiredDataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>Data access role ARN to use in case the new model is encrypted with a customer KMS key. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DesiredInferenceUnits" /></td>
    <td><code>integer</code></td>
    <td>The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.</td>
</tr>
<tr>
    <td><CopyableCode code="DesiredModelArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the new model to use for updating an existing endpoint. This ARN is going to be different from the model ARN when the update is in progress (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:(document-classifier|entity-recognizer)/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the endpoint. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:(document-classifier-endpoint|entity-recognizer-endpoint)/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FlywheelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the flywheel (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the endpoint was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>Specifies a reason for failure in cases of Failed status.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the model to which the endpoint is attached. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:(document-classifier|entity-recognizer)/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Specifies the status of the endpoint. Because the endpoint updates and creation are asynchronous, so customers will need to wait for the endpoint to be Ready status before making inference requests. (CREATING, DELETING, FAILED, IN_SERVICE, UPDATING)</td>
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
    <td>The creation date and time of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentInferenceUnits" /></td>
    <td><code>integer</code></td>
    <td>The number of inference units currently used by the model using this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="DataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId). (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DesiredDataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>Data access role ARN to use in case the new model is encrypted with a customer KMS key. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DesiredInferenceUnits" /></td>
    <td><code>integer</code></td>
    <td>The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.</td>
</tr>
<tr>
    <td><CopyableCode code="DesiredModelArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the new model to use for updating an existing endpoint. This ARN is going to be different from the model ARN when the update is in progress (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:(document-classifier|entity-recognizer)/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the endpoint. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:(document-classifier-endpoint|entity-recognizer-endpoint)/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FlywheelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the flywheel (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the endpoint was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>Specifies a reason for failure in cases of Failed status.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the model to which the endpoint is attached. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:(document-classifier|entity-recognizer)/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Specifies the status of the endpoint. Because the endpoint updates and creation are asynchronous, so customers will need to wait for the endpoint to be Ready status before making inference requests. (CREATING, DELETING, FAILED, IN_SERVICE, UPDATING)</td>
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
    <td>Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see Managing endpoints.</td>
</tr>
<tr>
    <td><a href="#list_endpoints"><CopyableCode code="list_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of all existing endpoints that you've created. For information about endpoints, see Managing endpoints.</td>
</tr>
<tr>
    <td><a href="#create_endpoint"><CopyableCode code="create_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-DesiredInferenceUnits"><code>DesiredInferenceUnits</code></a></td>
    <td></td>
    <td>Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see Managing endpoints.</td>
</tr>
<tr>
    <td><a href="#update_endpoint"><CopyableCode code="update_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointArn"><code>EndpointArn</code></a></td>
    <td></td>
    <td>Updates information about the specified endpoint. For information about endpoints, see Managing endpoints.</td>
</tr>
<tr>
    <td><a href="#delete_endpoint"><CopyableCode code="delete_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see Managing endpoints.</td>
</tr>
<tr>
    <td><a href="#classify_document"><CopyableCode code="classify_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointArn"><code>EndpointArn</code></a></td>
    <td></td>
    <td>Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the following model types: Custom classifier - a custom model that you have created and trained. For input, you can provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For input, you provide English plain text input. For prompt safety classification, the response includes only the Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document, the API response includes an Errors field that describes the errors. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.</td>
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

Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see Managing endpoints.

```sql
SELECT
CreationTime,
CurrentInferenceUnits,
DataAccessRoleArn,
DesiredDataAccessRoleArn,
DesiredInferenceUnits,
DesiredModelArn,
EndpointArn,
FlywheelArn,
LastModifiedTime,
Message,
ModelArn,
Status
FROM aws.comprehend.endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_endpoints">

Gets a list of all existing endpoints that you've created. For information about endpoints, see Managing endpoints.

```sql
SELECT
CreationTime,
CurrentInferenceUnits,
DataAccessRoleArn,
DesiredDataAccessRoleArn,
DesiredInferenceUnits,
DesiredModelArn,
EndpointArn,
FlywheelArn,
LastModifiedTime,
Message,
ModelArn,
Status
FROM aws.comprehend.endpoints
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

Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see Managing endpoints.

```sql
INSERT INTO aws.comprehend.endpoints (
EndpointName,
ModelArn,
DesiredInferenceUnits,
ClientRequestToken,
Tags,
DataAccessRoleArn,
FlywheelArn,
region
)
SELECT 
'{{ EndpointName }}' /* required */,
'{{ ModelArn }}',
{{ DesiredInferenceUnits }} /* required */,
'{{ ClientRequestToken }}',
'{{ Tags }}',
'{{ DataAccessRoleArn }}',
'{{ FlywheelArn }}',
'{{ region }}'
RETURNING
EndpointArn,
ModelArn
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
        This is the descriptive suffix that becomes part of the EndpointArn used for all subsequent requests to this resource.
    - name: ModelArn
      value: "{{ ModelArn }}"
      description: |
        The Amazon Resource Number (ARN) of the model to which the endpoint will be attached.
    - name: DesiredInferenceUnits
      value: {{ DesiredInferenceUnits }}
      description: |
        The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        An idempotency token provided by the customer. If this token matches a previous endpoint creation request, Amazon Comprehend will not return a ResourceInUseException.
    - name: Tags
      description: |
        Tags to associate with the endpoint. A tag is a key-value pair that adds metadata to the endpoint. For example, a tag with "Sales" as the key might be added to an endpoint to indicate its use by the sales department.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: DataAccessRoleArn
      value: "{{ DataAccessRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).
    - name: FlywheelArn
      value: "{{ FlywheelArn }}"
      description: |
        The Amazon Resource Number (ARN) of the flywheel to which the endpoint will be attached.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_endpoint"
    values={[
        { label: 'update_endpoint', value: 'update_endpoint' }
    ]}
>
<TabItem value="update_endpoint">

Updates information about the specified endpoint. For information about endpoints, see Managing endpoints.

```sql
UPDATE aws.comprehend.endpoints
SET 
EndpointArn = '{{ EndpointArn }}',
DesiredModelArn = '{{ DesiredModelArn }}',
DesiredInferenceUnits = {{ DesiredInferenceUnits }},
DesiredDataAccessRoleArn = '{{ DesiredDataAccessRoleArn }}',
FlywheelArn = '{{ FlywheelArn }}'
WHERE 
region = '{{ region }}' --required
AND EndpointArn = '{{ EndpointArn }}' --required
RETURNING
DesiredModelArn;
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

Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see Managing endpoints.

```sql
DELETE FROM aws.comprehend.endpoints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="classify_document"
    values={[
        { label: 'classify_document', value: 'classify_document' }
    ]}
>
<TabItem value="classify_document">

Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the following model types: Custom classifier - a custom model that you have created and trained. For input, you can provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For input, you provide English plain text input. For prompt safety classification, the response includes only the Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document, the API response includes an Errors field that describes the errors. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

```sql
EXEC aws.comprehend.endpoints.classify_document 
@region='{{ region }}' --required 
@@json=
'{
"Text": "{{ Text }}", 
"EndpointArn": "{{ EndpointArn }}", 
"Bytes": "{{ Bytes }}", 
"DocumentReaderConfig": "{{ DocumentReaderConfig }}"
}'
;
```
</TabItem>
</Tabs>
