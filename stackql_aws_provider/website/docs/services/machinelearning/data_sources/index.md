--- 
title: data_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sources
  - machinelearning
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.machinelearning.data_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_source"
    values={[
        { label: 'get_data_source', value: 'get_data_source' },
        { label: 'describe_data_sources', value: 'describe_data_sources' }
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
    <td><CopyableCode code="ComputeStatistics" /></td>
    <td><code>boolean</code></td>
    <td>The parameter is true if statistics need to be generated from the observation data.</td>
</tr>
<tr>
    <td><CopyableCode code="ComputeTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedByIamUser" /></td>
    <td><code>string</code></td>
    <td>The AWS user account from which the DataSource was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account. (pattern: &lt;code&gt;arn:aws:iam::&#91;0-9&#93;+:((user/.+)|(root))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DataLocationS3" /></td>
    <td><code>string</code></td>
    <td>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3). (pattern: &lt;code&gt;s3:​//(&#91;^/&#93;+)(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DataRearrangement" /></td>
    <td><code>string</code></td>
    <td>A JSON string that represents the splitting and rearrangement requirement used when this DataSource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceId" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the DataSource at creation. This value should be identical to the value of the DataSourceId in the request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceSchema" /></td>
    <td><code>string</code></td>
    <td>The schema used by all of the data files of this DataSource. Note: This parameter is provided as part of the verbose format.</td>
</tr>
<tr>
    <td><CopyableCode code="FinishedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="LogUri" /></td>
    <td><code>string</code></td>
    <td>A link to the file containing logs of CreateDataSourceFrom* operations.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>The user-supplied description of the most recent details about creating the DataSource.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A user-supplied name or description of the DataSource. (pattern: &lt;code&gt;.*\S.*|^$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfFiles" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="RDSMetadata" /></td>
    <td><code>object</code></td>
    <td>The datasource details that are specific to Amazon RDS.</td>
</tr>
<tr>
    <td><CopyableCode code="RedshiftMetadata" /></td>
    <td><code>object</code></td>
    <td>Describes the DataSource details specific to Amazon Redshift.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an AWS IAM Role, such as the following: arn:aws:iam::account:role/rolename.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the DataSource. This element can have one of the following values: PENDING - Amazon ML submitted a request to create a DataSource. INPROGRESS - The creation process is underway. FAILED - The request to create a DataSource did not run to completion. It is not usable. COMPLETED - The creation process completed successfully. DELETED - The DataSource is marked as deleted. It is not usable. (PENDING, INPROGRESS, FAILED, COMPLETED, DELETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_data_sources">

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
    <td><CopyableCode code="ComputeStatistics" /></td>
    <td><code>boolean</code></td>
    <td>The parameter is true if statistics need to be generated from the observation data.</td>
</tr>
<tr>
    <td><CopyableCode code="ComputeTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedByIamUser" /></td>
    <td><code>string</code></td>
    <td>The AWS user account from which the DataSource was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account. (pattern: &lt;code&gt;arn:aws:iam::&#91;0-9&#93;+:((user/.+)|(root))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DataLocationS3" /></td>
    <td><code>string</code></td>
    <td>The location and name of the data in Amazon Simple Storage Service (Amazon S3) that is used by a DataSource. (pattern: &lt;code&gt;s3:​//(&#91;^/&#93;+)(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DataRearrangement" /></td>
    <td><code>string</code></td>
    <td>A JSON string that represents the splitting and rearrangement requirement used when this DataSource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceId" /></td>
    <td><code>string</code></td>
    <td>The ID that is assigned to the DataSource during creation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FinishedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the most recent details about creating the DataSource.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A user-supplied name or description of the DataSource. (pattern: &lt;code&gt;.*\S.*|^$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfFiles" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="RDSMetadata" /></td>
    <td><code>object</code></td>
    <td>The datasource details that are specific to Amazon RDS.</td>
</tr>
<tr>
    <td><CopyableCode code="RedshiftMetadata" /></td>
    <td><code>object</code></td>
    <td>Describes the DataSource details specific to Amazon Redshift.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an AWS IAM Role, such as the following: arn:aws:iam::account:role/rolename.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the DataSource. This element can have one of the following values: PENDING - Amazon Machine Learning (Amazon ML) submitted a request to create a DataSource. INPROGRESS - The creation process is underway. FAILED - The request to create a DataSource did not run to completion. It is not usable. COMPLETED - The creation process completed successfully. DELETED - The DataSource is marked as deleted. It is not usable. (PENDING, INPROGRESS, FAILED, COMPLETED, DELETED)</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a DataSource that includes metadata and data file information, as well as the current status of the DataSource. GetDataSource provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</td>
</tr>
<tr>
    <td><a href="#describe_data_sources"><CopyableCode code="describe_data_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of DataSource that match the search criteria in the request.</td>
</tr>
<tr>
    <td><a href="#create_data_source_from_rds"><CopyableCode code="create_data_source_from_rds" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSourceId"><code>DataSourceId</code></a>, <a href="#parameter-RDSData"><code>RDSData</code></a>, <a href="#parameter-RoleARN"><code>RoleARN</code></a></td>
    <td></td>
    <td>Creates a DataSource object from an Amazon Relational Database Service (Amazon RDS). A DataSource references data that can be used to perform CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromRDS is an asynchronous operation. In response to CreateDataSourceFromRDS, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource is created and ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in the COMPLETED or PENDING state can be used only to perform &gt;CreateMLModel&gt;, CreateEvaluation, or CreateBatchPrediction operations. If Amazon ML cannot accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response.</td>
</tr>
<tr>
    <td><a href="#create_data_source_from_redshift"><CopyableCode code="create_data_source_from_redshift" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSourceId"><code>DataSourceId</code></a>, <a href="#parameter-DataSpec"><code>DataSpec</code></a>, <a href="#parameter-RoleARN"><code>RoleARN</code></a></td>
    <td></td>
    <td>Creates a DataSource from a database hosted on an Amazon Redshift cluster. A DataSource references data that can be used to perform either CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromRedshift is an asynchronous operation. In response to CreateDataSourceFromRedshift, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource is created and ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in COMPLETED or PENDING states can be used to perform only CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. If Amazon ML can't accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response. The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a SelectSqlQuery query. Amazon ML executes an Unload command in Amazon Redshift to transfer the result set of the SelectSqlQuery query to S3StagingLocation. After the DataSource has been created, it's ready for use in evaluations and batch predictions. If you plan to use the DataSource to train an MLModel, the DataSource also requires a recipe. A recipe describes how each input variable will be used in training an MLModel. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions. You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call GetDataSource for an existing datasource and copy the values to a CreateDataSource call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</td>
</tr>
<tr>
    <td><a href="#create_data_source_from_s3"><CopyableCode code="create_data_source_from_s3" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSourceId"><code>DataSourceId</code></a>, <a href="#parameter-DataSpec"><code>DataSpec</code></a></td>
    <td></td>
    <td>Creates a DataSource object. A DataSource references data that can be used to perform CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromS3 is an asynchronous operation. In response to CreateDataSourceFromS3, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource has been created and is ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in the COMPLETED or PENDING state can be used to perform only CreateMLModel, CreateEvaluation or CreateBatchPrediction operations. If Amazon ML can't accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response. The observation data used in a DataSource should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the DataSource. After the DataSource has been created, it's ready to use in evaluations and batch predictions. If you plan to use the DataSource to train an MLModel, the DataSource also needs a recipe. A recipe describes how each input variable will be used in training an MLModel. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</td>
</tr>
<tr>
    <td><a href="#update_data_source"><CopyableCode code="update_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSourceId"><code>DataSourceId</code></a>, <a href="#parameter-DataSourceName"><code>DataSourceName</code></a></td>
    <td></td>
    <td>Updates the DataSourceName of a DataSource. You can use the GetDataSource operation to view the contents of the updated data element.</td>
</tr>
<tr>
    <td><a href="#delete_data_source"><CopyableCode code="delete_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Assigns the DELETED status to a DataSource, rendering it unusable. After using the DeleteDataSource operation, you can use the GetDataSource operation to verify that the status of the DataSource changed to DELETED. Caution: The results of the DeleteDataSource operation are irreversible.</td>
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
    defaultValue="get_data_source"
    values={[
        { label: 'get_data_source', value: 'get_data_source' },
        { label: 'describe_data_sources', value: 'describe_data_sources' }
    ]}
>
<TabItem value="get_data_source">

Returns a DataSource that includes metadata and data file information, as well as the current status of the DataSource. GetDataSource provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.

```sql
SELECT
ComputeStatistics,
ComputeTime,
CreatedAt,
CreatedByIamUser,
DataLocationS3,
DataRearrangement,
DataSizeInBytes,
DataSourceId,
DataSourceSchema,
FinishedAt,
LastUpdatedAt,
LogUri,
Message,
Name,
NumberOfFiles,
RDSMetadata,
RedshiftMetadata,
RoleARN,
StartedAt,
Status
FROM aws.machinelearning.data_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_data_sources">

Returns a list of DataSource that match the search criteria in the request.

```sql
SELECT
ComputeStatistics,
ComputeTime,
CreatedAt,
CreatedByIamUser,
DataLocationS3,
DataRearrangement,
DataSizeInBytes,
DataSourceId,
FinishedAt,
LastUpdatedAt,
Message,
Name,
NumberOfFiles,
RDSMetadata,
RedshiftMetadata,
RoleARN,
StartedAt,
Status
FROM aws.machinelearning.data_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_source_from_rds"
    values={[
        { label: 'create_data_source_from_rds', value: 'create_data_source_from_rds' },
        { label: 'create_data_source_from_redshift', value: 'create_data_source_from_redshift' },
        { label: 'create_data_source_from_s3', value: 'create_data_source_from_s3' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_source_from_rds">

Creates a DataSource object from an Amazon Relational Database Service (Amazon RDS). A DataSource references data that can be used to perform CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromRDS is an asynchronous operation. In response to CreateDataSourceFromRDS, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource is created and ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in the COMPLETED or PENDING state can be used only to perform &gt;CreateMLModel&gt;, CreateEvaluation, or CreateBatchPrediction operations. If Amazon ML cannot accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response.

```sql
INSERT INTO aws.machinelearning.data_sources (
DataSourceId,
DataSourceName,
RDSData,
RoleARN,
ComputeStatistics,
region
)
SELECT 
'{{ DataSourceId }}' /* required */,
'{{ DataSourceName }}',
'{{ RDSData }}' /* required */,
'{{ RoleARN }}' /* required */,
{{ ComputeStatistics }},
'{{ region }}'
RETURNING
DataSourceId
;
```
</TabItem>
<TabItem value="create_data_source_from_redshift">

Creates a DataSource from a database hosted on an Amazon Redshift cluster. A DataSource references data that can be used to perform either CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromRedshift is an asynchronous operation. In response to CreateDataSourceFromRedshift, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource is created and ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in COMPLETED or PENDING states can be used to perform only CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. If Amazon ML can't accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response. The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a SelectSqlQuery query. Amazon ML executes an Unload command in Amazon Redshift to transfer the result set of the SelectSqlQuery query to S3StagingLocation. After the DataSource has been created, it's ready for use in evaluations and batch predictions. If you plan to use the DataSource to train an MLModel, the DataSource also requires a recipe. A recipe describes how each input variable will be used in training an MLModel. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions. You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call GetDataSource for an existing datasource and copy the values to a CreateDataSource call. Change the settings that you want to change and make sure that all required fields have the appropriate values.

```sql
INSERT INTO aws.machinelearning.data_sources (
DataSourceId,
DataSourceName,
DataSpec,
RoleARN,
ComputeStatistics,
region
)
SELECT 
'{{ DataSourceId }}' /* required */,
'{{ DataSourceName }}',
'{{ DataSpec }}' /* required */,
'{{ RoleARN }}' /* required */,
{{ ComputeStatistics }},
'{{ region }}'
RETURNING
DataSourceId
;
```
</TabItem>
<TabItem value="create_data_source_from_s3">

Creates a DataSource object. A DataSource references data that can be used to perform CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations. CreateDataSourceFromS3 is an asynchronous operation. In response to CreateDataSourceFromS3, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource has been created and is ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in the COMPLETED or PENDING state can be used to perform only CreateMLModel, CreateEvaluation or CreateBatchPrediction operations. If Amazon ML can't accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response. The observation data used in a DataSource should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the DataSource. After the DataSource has been created, it's ready to use in evaluations and batch predictions. If you plan to use the DataSource to train an MLModel, the DataSource also needs a recipe. A recipe describes how each input variable will be used in training an MLModel. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.

```sql
INSERT INTO aws.machinelearning.data_sources (
DataSourceId,
DataSourceName,
DataSpec,
ComputeStatistics,
region
)
SELECT 
'{{ DataSourceId }}' /* required */,
'{{ DataSourceName }}',
'{{ DataSpec }}' /* required */,
{{ ComputeStatistics }},
'{{ region }}'
RETURNING
DataSourceId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_sources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_sources resource.
    - name: DataSourceId
      value: "{{ DataSourceId }}"
      description: |
        A user-supplied identifier that uniquely identifies the DataSource.
    - name: DataSourceName
      value: "{{ DataSourceName }}"
      description: |
        A user-supplied name or description of the DataSource.
    - name: RDSData
      description: |
        The data specification of an Amazon RDS DataSource: DatabaseInformation - DatabaseName - The name of the Amazon RDS database. InstanceIdentifier - A unique identifier for the Amazon RDS database instance. DatabaseCredentials - AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon RDS database. ResourceRole - A role (DataPipelineDefaultResourceRole) assumed by an EC2 instance to carry out the copy task from Amazon RDS to Amazon Simple Storage Service (Amazon S3). For more information, see Role templates for data pipelines. ServiceRole - A role (DataPipelineDefaultRole) assumed by the AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see Role templates for data pipelines. SecurityInfo - The security information to use to access an RDS DB instance. You need to set up appropriate ingress rules for the security entity IDs provided to allow access to the Amazon RDS instance. Specify a [SubnetId, SecurityGroupIds] pair for a VPC-based RDS DB instance. SelectSqlQuery - A query that is used to retrieve the observation data for the Datasource. S3StagingLocation - The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using SelectSqlQuery is stored in this location. DataSchemaUri - The Amazon S3 location of the DataSchema. DataSchema - A JSON string representing the schema. This is not required if DataSchemaUri is specified. DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the Datasource. Sample - "{\"splitting\":{\"percentBegin\":10,\"percentEnd\":60}}"
      value:
        DatabaseInformation:
          InstanceIdentifier: "{{ InstanceIdentifier }}"
          DatabaseName: "{{ DatabaseName }}"
        SelectSqlQuery: "{{ SelectSqlQuery }}"
        DatabaseCredentials:
          Username: "{{ Username }}"
          Password: "{{ Password }}"
        S3StagingLocation: "{{ S3StagingLocation }}"
        DataRearrangement: "{{ DataRearrangement }}"
        DataSchema: "{{ DataSchema }}"
        DataSchemaUri: "{{ DataSchemaUri }}"
        ResourceRole: "{{ ResourceRole }}"
        ServiceRole: "{{ ServiceRole }}"
        SubnetId: "{{ SubnetId }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
    - name: RoleARN
      value: "{{ RoleARN }}"
      description: |
        A fully specified role Amazon Resource Name (ARN). Amazon ML assumes the role on behalf of the user to create the following: A security group to allow Amazon ML to execute the SelectSqlQuery query on an Amazon Redshift cluster An Amazon S3 bucket policy to grant Amazon ML read/write permissions on the S3StagingLocation
    - name: ComputeStatistics
      value: {{ ComputeStatistics }}
      description: |
        The compute statistics for a DataSource. The statistics are generated from the observation data referenced by a DataSource. Amazon ML uses the statistics internally during MLModel training. This parameter must be set to true if the DataSource needs to be used for MLModel training.
    - name: DataSpec
      description: |
        The data specification of a DataSource: DataLocationS3 - The Amazon S3 location of the observation data. DataSchemaLocationS3 - The Amazon S3 location of the DataSchema. DataSchema - A JSON string representing the schema. This is not required if DataSchemaUri is specified. DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the Datasource. Sample - "{\"splitting\":{\"percentBegin\":10,\"percentEnd\":60}}"
      value:
        DataLocationS3: "{{ DataLocationS3 }}"
        DataRearrangement: "{{ DataRearrangement }}"
        DataSchema: "{{ DataSchema }}"
        DataSchemaLocationS3: "{{ DataSchemaLocationS3 }}"
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

Updates the DataSourceName of a DataSource. You can use the GetDataSource operation to view the contents of the updated data element.

```sql
UPDATE aws.machinelearning.data_sources
SET 
DataSourceId = '{{ DataSourceId }}',
DataSourceName = '{{ DataSourceName }}'
WHERE 
region = '{{ region }}' --required
AND DataSourceId = '{{ DataSourceId }}' --required
AND DataSourceName = '{{ DataSourceName }}' --required
RETURNING
DataSourceId;
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

Assigns the DELETED status to a DataSource, rendering it unusable. After using the DeleteDataSource operation, you can use the GetDataSource operation to verify that the status of the DataSource changed to DELETED. Caution: The results of the DeleteDataSource operation are irreversible.

```sql
DELETE FROM aws.machinelearning.data_sources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
