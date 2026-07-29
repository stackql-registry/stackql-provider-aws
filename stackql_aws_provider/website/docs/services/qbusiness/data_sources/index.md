--- 
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>data_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_source"
    values={[
        { label: 'get_data_source', value: 'get_data_source' },
        { label: 'list_data_sources', value: 'list_data_sources' }
    ]}
>
<TabItem value="get_data_source">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Provides the configuration information for an Amazon Q Business data source.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the data source connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data source. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source connector. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the data source connector. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name for the data source connector. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_enrichment_configuration" /></td>
    <td><code>object</code></td>
    <td>Provides the configuration information for altering document metadata and content during the document ingestion process. For more information, see Custom document enrichment.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Provides information about a Amazon Q Business request error.</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the index linked to the data source connector. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="media_extraction_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for extracting information from media in documents.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role with permission to access the data source and required resources. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the data source connector. When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source connector to fail. (PENDING_CREATION, CREATING, ACTIVE, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_schedule" /></td>
    <td><code>string</code></td>
    <td>The schedule for Amazon Q Business to update the index. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the data source connector. For example, S3.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the data source connector was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_configuration" /></td>
    <td><code>object</code></td>
    <td>Provides configuration information needed to connect to an Amazon VPC (Virtual Private Cloud).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_sources">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business data source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business data source. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Q Business data source. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon Q Business data source. (PENDING_CREATION, CREATING, ACTIVE, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the Amazon Q Business data source.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business data source was last updated.</td>
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
    <td><a href="#get_data_source"><CopyableCode code="get_data_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an existing Amazon Q Business data source connector.</td>
</tr>
<tr>
    <td><a href="#list_data_sources"><CopyableCode code="list_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the Amazon Q Business data source connectors that you have created.</td>
</tr>
<tr>
    <td><a href="#create_data_source"><CopyableCode code="create_data_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Creates a data source connector for an Amazon Q Business application. CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.</td>
</tr>
<tr>
    <td><a href="#update_data_source"><CopyableCode code="update_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Q Business data source connector.</td>
</tr>
<tr>
    <td><a href="#delete_data_source"><CopyableCode code="delete_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q Business data source connector. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING.</td>
</tr>
<tr>
    <td><a href="#start_data_source_sync_job"><CopyableCode code="start_data_source_sync_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts a data source connector synchronization job. If a synchronization job is already in progress, Amazon Q Business returns a ConflictException.</td>
</tr>
<tr>
    <td><a href="#stop_data_source_sync_job"><CopyableCode code="stop_data_source_sync_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops an Amazon Q Business data source connector synchronization job already in progress.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application that the data source is connected to.</td>
</tr>
<tr id="parameter-data_source_id">
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source connector.</td>
</tr>
<tr id="parameter-index_id">
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the index used with the Amazon Q Business data source connector.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of data source connectors to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business data source connectors.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_source"
    values={[
        { label: 'get_data_source', value: 'get_data_source' },
        { label: 'list_data_sources', value: 'list_data_sources' }
    ]}
>
<TabItem value="get_data_source">

Gets information about an existing Amazon Q Business data source connector.

```sql
SELECT
application_id,
configuration,
created_at,
data_source_arn,
data_source_id,
description,
display_name,
document_enrichment_configuration,
error,
index_id,
media_extraction_configuration,
role_arn,
status,
sync_schedule,
type_,
updated_at,
vpc_configuration
FROM aws.qbusiness.data_sources
WHERE application_id = '{{ application_id }}' -- required
AND index_id = '{{ index_id }}' -- required
AND data_source_id = '{{ data_source_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_sources">

Lists the Amazon Q Business data source connectors that you have created.

```sql
SELECT
created_at,
data_source_id,
display_name,
status,
type_,
updated_at
FROM aws.qbusiness.data_sources
WHERE application_id = '{{ application_id }}' -- required
AND index_id = '{{ index_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_source"
    values={[
        { label: 'create_data_source', value: 'create_data_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_source">

Creates a data source connector for an Amazon Q Business application. CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.

```sql
INSERT INTO aws.qbusiness.data_sources (
displayName,
configuration,
vpcConfiguration,
description,
tags,
syncSchedule,
roleArn,
clientToken,
documentEnrichmentConfiguration,
mediaExtractionConfiguration,
application_id,
index_id,
region
)
SELECT 
'{{ displayName }}' /* required */,
'{{ configuration }}' /* required */,
'{{ vpcConfiguration }}',
'{{ description }}',
'{{ tags }}',
'{{ syncSchedule }}',
'{{ roleArn }}',
'{{ clientToken }}',
'{{ documentEnrichmentConfiguration }}',
'{{ mediaExtractionConfiguration }}',
'{{ application_id }}',
'{{ index_id }}',
'{{ region }}'
RETURNING
data_source_arn,
data_source_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_sources
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the data_sources resource.
    - name: index_id
      value: "{{ index_id }}"
      description: Required parameter for the data_sources resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_sources resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: configuration
      value: "{{ configuration }}"
      description: |
        Provides the configuration information for an Amazon Q Business data source.
    - name: vpcConfiguration
      description: |
        Provides configuration information needed to connect to an Amazon VPC (Virtual Private Cloud).
      value:
        subnetIds:
          - "{{ subnetIds }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: syncSchedule
      value: "{{ syncSchedule }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: documentEnrichmentConfiguration
      description: |
        Provides the configuration information for altering document metadata and content during the document ingestion process. For more information, see Custom document enrichment.
      value:
        inlineConfigurations:
          - condition:
              key: "{{ key }}"
              operator: "{{ operator }}"
              value:
                stringValue: "{{ stringValue }}"
                stringListValue:
                  - "{{ stringListValue }}"
                longValue: {{ longValue }}
                dateValue: "{{ dateValue }}"
            target:
              key: "{{ key }}"
              value:
                stringValue: "{{ stringValue }}"
                stringListValue:
                  - "{{ stringListValue }}"
                longValue: {{ longValue }}
                dateValue: "{{ dateValue }}"
              attributeValueOperator: "{{ attributeValueOperator }}"
            documentContentOperator: "{{ documentContentOperator }}"
        preExtractionHookConfiguration:
          invocationCondition:
            key: "{{ key }}"
            operator: "{{ operator }}"
            value:
              stringValue: "{{ stringValue }}"
              stringListValue:
                - "{{ stringListValue }}"
              longValue: {{ longValue }}
              dateValue: "{{ dateValue }}"
          lambdaArn: "{{ lambdaArn }}"
          s3BucketName: "{{ s3BucketName }}"
          roleArn: "{{ roleArn }}"
        postExtractionHookConfiguration:
          invocationCondition:
            key: "{{ key }}"
            operator: "{{ operator }}"
            value:
              stringValue: "{{ stringValue }}"
              stringListValue:
                - "{{ stringListValue }}"
              longValue: {{ longValue }}
              dateValue: "{{ dateValue }}"
          lambdaArn: "{{ lambdaArn }}"
          s3BucketName: "{{ s3BucketName }}"
          roleArn: "{{ roleArn }}"
    - name: mediaExtractionConfiguration
      description: |
        The configuration for extracting information from media in documents.
      value:
        imageExtractionConfiguration:
          imageExtractionStatus: "{{ imageExtractionStatus }}"
        audioExtractionConfiguration:
          audioExtractionStatus: "{{ audioExtractionStatus }}"
        videoExtractionConfiguration:
          videoExtractionStatus: "{{ videoExtractionStatus }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_source"
    values={[
        { label: 'update_data_source', value: 'update_data_source' }
    ]}
>
<TabItem value="update_data_source">

Updates an existing Amazon Q Business data source connector.

```sql
UPDATE aws.qbusiness.data_sources
SET 
displayName = '{{ displayName }}',
configuration = '{{ configuration }}',
vpcConfiguration = '{{ vpcConfiguration }}',
description = '{{ description }}',
syncSchedule = '{{ syncSchedule }}',
roleArn = '{{ roleArn }}',
documentEnrichmentConfiguration = '{{ documentEnrichmentConfiguration }}',
mediaExtractionConfiguration = '{{ mediaExtractionConfiguration }}'
WHERE 
application_id = '{{ application_id }}' --required
AND index_id = '{{ index_id }}' --required
AND data_source_id = '{{ data_source_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_source"
    values={[
        { label: 'delete_data_source', value: 'delete_data_source' }
    ]}
>
<TabItem value="delete_data_source">

Deletes an Amazon Q Business data source connector. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING.

```sql
DELETE FROM aws.qbusiness.data_sources
WHERE application_id = '{{ application_id }}' --required
AND index_id = '{{ index_id }}' --required
AND data_source_id = '{{ data_source_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_data_source_sync_job"
    values={[
        { label: 'start_data_source_sync_job', value: 'start_data_source_sync_job' },
        { label: 'stop_data_source_sync_job', value: 'stop_data_source_sync_job' }
    ]}
>
<TabItem value="start_data_source_sync_job">

Starts a data source connector synchronization job. If a synchronization job is already in progress, Amazon Q Business returns a ConflictException.

```sql
EXEC aws.qbusiness.data_sources.start_data_source_sync_job 
@data_source_id='{{ data_source_id }}' --required, 
@application_id='{{ application_id }}' --required, 
@index_id='{{ index_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_data_source_sync_job">

Stops an Amazon Q Business data source connector synchronization job already in progress.

```sql
EXEC aws.qbusiness.data_sources.stop_data_source_sync_job 
@data_source_id='{{ data_source_id }}' --required, 
@application_id='{{ application_id }}' --required, 
@index_id='{{ index_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
