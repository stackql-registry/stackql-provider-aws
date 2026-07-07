--- 
title: provisioned_model_throughputs
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioned_model_throughputs
  - bedrock
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

Creates, updates, deletes, gets or lists a <code>provisioned_model_throughputs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioned_model_throughputs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.provisioned_model_throughputs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_provisioned_model_throughput"
    values={[
        { label: 'get_provisioned_model_throughput', value: 'get_provisioned_model_throughput' },
        { label: 'list_provisioned_model_throughputs', value: 'list_provisioned_model_throughputs' }
    ]}
>
<TabItem value="get_provisioned_model_throughput">

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
    <td><CopyableCode code="commitmentDuration" /></td>
    <td><code>string</code></td>
    <td>Commitment duration of the Provisioned Throughput. (OneMonth, SixMonths)</td>
</tr>
<tr>
    <td><CopyableCode code="commitmentExpirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the commitment term for the Provisioned Throughput expires.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the creation time for this Provisioned Throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="desiredModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model requested to be associated to this Provisioned Throughput. This value differs from the modelArn if updating hasn't completed. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/((imported)|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;))((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?/&#91;a-z0-9&#93;&#123;12&#125;)|(:foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desiredModelUnits" /></td>
    <td><code>integer</code></td>
    <td>The number of model units that was requested for this Provisioned Throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="failureMessage" /></td>
    <td><code>string</code></td>
    <td>A failure message for any issues that occurred during creation, updating, or deletion of the Provisioned Throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="foundationModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the base model for which the Provisioned Throughput was created, or of the base model that the custom model for which the Provisioned Throughput was created was customized. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;::foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last time that this Provisioned Throughput was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="modelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model associated with this Provisioned Throughput. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/((imported)|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;))((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?/&#91;a-z0-9&#93;&#123;12&#125;)|(:foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modelUnits" /></td>
    <td><code>integer</code></td>
    <td>The number of model units allocated to this Provisioned Throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Provisioned Throughput. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:provisioned-model/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedModelName" /></td>
    <td><code>string</code></td>
    <td>The name of the Provisioned Throughput. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Provisioned Throughput. (Creating, InService, Updating, Failed)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_provisioned_model_throughputs">

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
    <td><CopyableCode code="commitmentDuration" /></td>
    <td><code>string</code></td>
    <td>The duration for which the Provisioned Throughput was committed. (OneMonth, SixMonths)</td>
</tr>
<tr>
    <td><CopyableCode code="commitmentExpirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the commitment term of the Provisioned Throughput expires.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the Provisioned Throughput was created.</td>
</tr>
<tr>
    <td><CopyableCode code="desiredModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model requested to be associated to this Provisioned Throughput. This value differs from the modelArn if updating hasn't completed. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/((imported)|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;))((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?/&#91;a-z0-9&#93;&#123;12&#125;)|(:foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desiredModelUnits" /></td>
    <td><code>integer</code></td>
    <td>The number of model units that was requested to be allocated to the Provisioned Throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="foundationModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the base model for which the Provisioned Throughput was created, or of the base model that the custom model for which the Provisioned Throughput was created was customized. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;::foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the Provisioned Throughput was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="modelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the model associated with the Provisioned Throughput. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:((&#91;0-9&#93;&#123;12&#125;:custom-model/((imported)|(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;))((&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;)?/&#91;a-z0-9&#93;&#123;12&#125;)|(:foundation-model/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modelUnits" /></td>
    <td><code>integer</code></td>
    <td>The number of model units allocated to the Provisioned Throughput.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Provisioned Throughput. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:provisioned-model/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedModelName" /></td>
    <td><code>string</code></td>
    <td>The name of the Provisioned Throughput. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Provisioned Throughput. (Creating, InService, Updating, Failed)</td>
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
    <td><a href="#get_provisioned_model_throughput"><CopyableCode code="get_provisioned_model_throughput" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-provisioned_model_id"><code>provisioned_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for a Provisioned Throughput. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#list_provisioned_model_throughputs"><CopyableCode code="list_provisioned_model_throughputs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-creationTimeAfter"><code>creationTimeAfter</code></a>, <a href="#parameter-creationTimeBefore"><code>creationTimeBefore</code></a>, <a href="#parameter-statusEquals"><code>statusEquals</code></a>, <a href="#parameter-modelArnEquals"><code>modelArnEquals</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists the Provisioned Throughputs in the account. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_provisioned_model_throughput"><CopyableCode code="create_provisioned_model_throughput" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-modelUnits"><code>modelUnits</code></a>, <a href="#parameter-provisionedModelName"><code>provisionedModelName</code></a>, <a href="#parameter-modelId"><code>modelId</code></a></td>
    <td></td>
    <td>Creates dedicated throughput for a base or custom model with the model units and for the duration that you specify. For pricing details, see Amazon Bedrock Pricing. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#update_provisioned_model_throughput"><CopyableCode code="update_provisioned_model_throughput" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-provisioned_model_id"><code>provisioned_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the name or associated model for a Provisioned Throughput. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_provisioned_model_throughput"><CopyableCode code="delete_provisioned_model_throughput" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-provisioned_model_id"><code>provisioned_model_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Provisioned Throughput. You can't delete a Provisioned Throughput before the commitment term is over. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.</td>
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
<tr id="parameter-provisioned_model_id">
    <td><CopyableCode code="provisioned_model_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or name of the Provisioned Throughput.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-creationTimeAfter">
    <td><CopyableCode code="creationTimeAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>A filter that returns Provisioned Throughputs created after the specified time.</td>
</tr>
<tr id="parameter-creationTimeBefore">
    <td><CopyableCode code="creationTimeBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>A filter that returns Provisioned Throughputs created before the specified time.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>THe maximum number of results to return in the response. If there are more results than the number you specified, the response returns a nextToken value. To see the next batch of results, send the nextToken value in another list request.</td>
</tr>
<tr id="parameter-modelArnEquals">
    <td><CopyableCode code="modelArnEquals" /></td>
    <td><code>string</code></td>
    <td>A filter that returns Provisioned Throughputs whose model Amazon Resource Name (ARN) is equal to the value that you specify.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>A filter that returns Provisioned Throughputs if their name contains the expression that you specify.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there are more results than the number you specified in the maxResults field, the response returns a nextToken value. To see the next batch of results, specify the nextToken value in this field.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field by which to sort the returned list of Provisioned Throughputs.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order of the results.</td>
</tr>
<tr id="parameter-statusEquals">
    <td><CopyableCode code="statusEquals" /></td>
    <td><code>string</code></td>
    <td>A filter that returns Provisioned Throughputs if their statuses matches the value that you specify.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_provisioned_model_throughput"
    values={[
        { label: 'get_provisioned_model_throughput', value: 'get_provisioned_model_throughput' },
        { label: 'list_provisioned_model_throughputs', value: 'list_provisioned_model_throughputs' }
    ]}
>
<TabItem value="get_provisioned_model_throughput">

Returns details for a Provisioned Throughput. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.

```sql
SELECT
commitmentDuration,
commitmentExpirationTime,
creationTime,
desiredModelArn,
desiredModelUnits,
failureMessage,
foundationModelArn,
lastModifiedTime,
modelArn,
modelUnits,
provisionedModelArn,
provisionedModelName,
status
FROM aws.bedrock.provisioned_model_throughputs
WHERE provisioned_model_id = '{{ provisioned_model_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_provisioned_model_throughputs">

Lists the Provisioned Throughputs in the account. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.

```sql
SELECT
commitmentDuration,
commitmentExpirationTime,
creationTime,
desiredModelArn,
desiredModelUnits,
foundationModelArn,
lastModifiedTime,
modelArn,
modelUnits,
provisionedModelArn,
provisionedModelName,
status
FROM aws.bedrock.provisioned_model_throughputs
WHERE region = '{{ region }}' -- required
AND creationTimeAfter = '{{ creationTimeAfter }}'
AND creationTimeBefore = '{{ creationTimeBefore }}'
AND statusEquals = '{{ statusEquals }}'
AND modelArnEquals = '{{ modelArnEquals }}'
AND nameContains = '{{ nameContains }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_provisioned_model_throughput"
    values={[
        { label: 'create_provisioned_model_throughput', value: 'create_provisioned_model_throughput' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_provisioned_model_throughput">

Creates dedicated throughput for a base or custom model with the model units and for the duration that you specify. For pricing details, see Amazon Bedrock Pricing. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.

```sql
INSERT INTO aws.bedrock.provisioned_model_throughputs (
clientRequestToken,
modelUnits,
provisionedModelName,
modelId,
commitmentDuration,
tags,
region
)
SELECT 
'{{ clientRequestToken }}',
{{ modelUnits }} /* required */,
'{{ provisionedModelName }}' /* required */,
'{{ modelId }}' /* required */,
'{{ commitmentDuration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
provisionedModelArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: provisioned_model_throughputs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the provisioned_model_throughputs resource.
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: modelUnits
      value: {{ modelUnits }}
    - name: provisionedModelName
      value: "{{ provisionedModelName }}"
    - name: modelId
      value: "{{ modelId }}"
    - name: commitmentDuration
      value: "{{ commitmentDuration }}"
      valid_values: ['OneMonth', 'SixMonths']
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_provisioned_model_throughput"
    values={[
        { label: 'update_provisioned_model_throughput', value: 'update_provisioned_model_throughput' }
    ]}
>
<TabItem value="update_provisioned_model_throughput">

Updates the name or associated model for a Provisioned Throughput. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.

```sql
UPDATE aws.bedrock.provisioned_model_throughputs
SET 
desiredProvisionedModelName = '{{ desiredProvisionedModelName }}',
desiredModelId = '{{ desiredModelId }}'
WHERE 
provisioned_model_id = '{{ provisioned_model_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_provisioned_model_throughput"
    values={[
        { label: 'delete_provisioned_model_throughput', value: 'delete_provisioned_model_throughput' }
    ]}
>
<TabItem value="delete_provisioned_model_throughput">

Deletes a Provisioned Throughput. You can't delete a Provisioned Throughput before the commitment term is over. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.

```sql
DELETE FROM aws.bedrock.provisioned_model_throughputs
WHERE provisioned_model_id = '{{ provisioned_model_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
