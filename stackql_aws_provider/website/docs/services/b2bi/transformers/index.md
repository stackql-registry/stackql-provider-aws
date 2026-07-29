--- 
title: transformers
hide_title: false
hide_table_of_contents: false
keywords:
  - transformers
  - b2bi
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

Creates, updates, deletes, gets or lists a <code>transformers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transformers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.b2bi.transformers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transformer"
    values={[
        { label: 'get_transformer', value: 'get_transformer' },
        { label: 'list_transformers', value: 'list_transformers' }
    ]}
>
<TabItem value="get_transformer">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Returns the name of the transformer, used to identify it. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,512&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp for creation date and time of the transformer.</td>
</tr>
<tr>
    <td><CopyableCode code="edi_type" /></td>
    <td><code>object</code></td>
    <td>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</td>
</tr>
<tr>
    <td><CopyableCode code="file_format" /></td>
    <td><code>string</code></td>
    <td>Returns that the currently supported file formats for EDI transformations are JSON and XML. (XML, JSON, NOT_USED)</td>
</tr>
<tr>
    <td><CopyableCode code="input_conversion" /></td>
    <td><code>object</code></td>
    <td>Returns the InputConversion object, which contains the format options for the inbound transformation.</td>
</tr>
<tr>
    <td><CopyableCode code="mapping" /></td>
    <td><code>object</code></td>
    <td>Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).</td>
</tr>
<tr>
    <td><CopyableCode code="mapping_template" /></td>
    <td><code>string</code></td>
    <td>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp for last time the transformer was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="output_conversion" /></td>
    <td><code>object</code></td>
    <td>Returns the OutputConversion object, which contains the format options for the outbound transformation.</td>
</tr>
<tr>
    <td><CopyableCode code="sample_document" /></td>
    <td><code>string</code></td>
    <td>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</td>
</tr>
<tr>
    <td><CopyableCode code="sample_documents" /></td>
    <td><code>object</code></td>
    <td>Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Returns the state of the newly created transformer. The transformer can be either active or inactive. For the transformer to be used in a capability, its status must active. (active, inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="transformer_arn" /></td>
    <td><code>string</code></td>
    <td>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</td>
</tr>
<tr>
    <td><CopyableCode code="transformer_id" /></td>
    <td><code>string</code></td>
    <td>Returns the system-assigned unique identifier for the transformer. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_transformers">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Returns the descriptive name for the transformer. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,512&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp indicating when the transformer was created. For example, 2023-07-20T19:58:44.624Z.</td>
</tr>
<tr>
    <td><CopyableCode code="edi_type" /></td>
    <td><code>object</code></td>
    <td>Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.</td>
</tr>
<tr>
    <td><CopyableCode code="file_format" /></td>
    <td><code>string</code></td>
    <td>Returns that the currently supported file formats for EDI transformations are JSON and XML. (XML, JSON, NOT_USED)</td>
</tr>
<tr>
    <td><CopyableCode code="input_conversion" /></td>
    <td><code>object</code></td>
    <td>Returns a structure that contains the format options for the transformation.</td>
</tr>
<tr>
    <td><CopyableCode code="mapping" /></td>
    <td><code>object</code></td>
    <td>Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).</td>
</tr>
<tr>
    <td><CopyableCode code="mapping_template" /></td>
    <td><code>string</code></td>
    <td>Returns the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp representing the date and time for the most recent change for the transformer object.</td>
</tr>
<tr>
    <td><CopyableCode code="output_conversion" /></td>
    <td><code>object</code></td>
    <td>Returns the OutputConversion object, which contains the format options for the outbound transformation.</td>
</tr>
<tr>
    <td><CopyableCode code="sample_document" /></td>
    <td><code>string</code></td>
    <td>Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.</td>
</tr>
<tr>
    <td><CopyableCode code="sample_documents" /></td>
    <td><code>object</code></td>
    <td>Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Returns the state of the newly created transformer. The transformer can be either active or inactive. For the transformer to be used in a capability, its status must active. (active, inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="transformer_id" /></td>
    <td><code>string</code></td>
    <td>Returns the system-assigned unique identifier for the transformer. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_transformer"><CopyableCode code="get_transformer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details for the transformer specified by the transformer ID. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively, a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.</td>
</tr>
<tr>
    <td><a href="#list_transformers"><CopyableCode code="list_transformers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the available transformers. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively, a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.</td>
</tr>
<tr>
    <td><a href="#create_transformer"><CopyableCode code="create_transformer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a transformer. Amazon Web Services B2B Data Interchange currently supports two scenarios: Inbound EDI: the Amazon Web Services customer receives an EDI file from their trading partner. Amazon Web Services B2B Data Interchange converts this EDI file into a JSON or XML file with a service-defined structure. A mapping template provided by the customer, in JSONata or XSLT format, is optionally applied to this file to produce a JSON or XML file with the structure the customer requires. Outbound EDI: the Amazon Web Services customer has a JSON or XML file containing data that they wish to use in an EDI file. A mapping template, provided by the customer (in either JSONata or XSLT format) is applied to this file to generate a JSON or XML file in the service-defined structure. This file is then converted to an EDI file. The following fields are provided for backwards compatibility only: fileFormat, mappingTemplate, ediType, and sampleDocument. Use the mapping data type in place of mappingTemplate and fileFormat Use the sampleDocuments data type in place of sampleDocument Use either the inputConversion or outputConversion in place of ediType</td>
</tr>
<tr>
    <td><a href="#update_transformer"><CopyableCode code="update_transformer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-transformerId"><code>transformerId</code></a></td>
    <td></td>
    <td>Updates the specified parameters for a transformer. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively, a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.</td>
</tr>
<tr>
    <td><a href="#delete_transformer"><CopyableCode code="delete_transformer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified transformer. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively, a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.</td>
</tr>
<tr>
    <td><a href="#start_transformer_job"><CopyableCode code="start_transformer_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inputFile"><code>inputFile</code></a>, <a href="#parameter-outputLocation"><code>outputLocation</code></a>, <a href="#parameter-transformerId"><code>transformerId</code></a></td>
    <td></td>
    <td>Runs a job, using a transformer, to parse input EDI (electronic data interchange) file into the output structures used by Amazon Web Services B2B Data Interchange. If you only want to transform EDI (electronic data interchange) documents, you don't need to create profiles, partnerships or capabilities. Just create and configure a transformer, and then run the StartTransformerJob API to process your files. The system stores transformer jobs for 30 days. During that period, you can run GetTransformerJob and supply its transformerId and transformerJobId to return details of the job.</td>
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
    defaultValue="get_transformer"
    values={[
        { label: 'get_transformer', value: 'get_transformer' },
        { label: 'list_transformers', value: 'list_transformers' }
    ]}
>
<TabItem value="get_transformer">

Retrieves the details for the transformer specified by the transformer ID. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively, a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.

```sql
SELECT
name,
created_at,
edi_type,
file_format,
input_conversion,
mapping,
mapping_template,
modified_at,
output_conversion,
sample_document,
sample_documents,
status,
transformer_arn,
transformer_id
FROM aws.b2bi.transformers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_transformers">

Lists the available transformers. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively, a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.

```sql
SELECT
name,
created_at,
edi_type,
file_format,
input_conversion,
mapping,
mapping_template,
modified_at,
output_conversion,
sample_document,
sample_documents,
status,
transformer_id
FROM aws.b2bi.transformers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_transformer"
    values={[
        { label: 'create_transformer', value: 'create_transformer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transformer">

Creates a transformer. Amazon Web Services B2B Data Interchange currently supports two scenarios: Inbound EDI: the Amazon Web Services customer receives an EDI file from their trading partner. Amazon Web Services B2B Data Interchange converts this EDI file into a JSON or XML file with a service-defined structure. A mapping template provided by the customer, in JSONata or XSLT format, is optionally applied to this file to produce a JSON or XML file with the structure the customer requires. Outbound EDI: the Amazon Web Services customer has a JSON or XML file containing data that they wish to use in an EDI file. A mapping template, provided by the customer (in either JSONata or XSLT format) is applied to this file to generate a JSON or XML file in the service-defined structure. This file is then converted to an EDI file. The following fields are provided for backwards compatibility only: fileFormat, mappingTemplate, ediType, and sampleDocument. Use the mapping data type in place of mappingTemplate and fileFormat Use the sampleDocuments data type in place of sampleDocument Use either the inputConversion or outputConversion in place of ediType

```sql
INSERT INTO aws.b2bi.transformers (
name,
clientToken,
tags,
fileFormat,
mappingTemplate,
ediType,
sampleDocument,
inputConversion,
mapping,
outputConversion,
sampleDocuments,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ fileFormat }}',
'{{ mappingTemplate }}',
'{{ ediType }}',
'{{ sampleDocument }}',
'{{ inputConversion }}',
'{{ mapping }}',
'{{ outputConversion }}',
'{{ sampleDocuments }}',
'{{ region }}'
RETURNING
name,
created_at,
edi_type,
file_format,
input_conversion,
mapping,
mapping_template,
output_conversion,
sample_document,
sample_documents,
status,
transformer_arn,
transformer_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transformers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transformers resource.
    - name: name
      value: "{{ name }}"
      description: |
        Specifies the name of the transformer, used to identify it.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Reserved for future use.
    - name: tags
      description: |
        Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: fileFormat
      value: "{{ fileFormat }}"
      description: |
        Specifies that the currently supported file formats for EDI transformations are JSON and XML.
      valid_values: ['XML', 'JSON', 'NOT_USED']
    - name: mappingTemplate
      value: "{{ mappingTemplate }}"
      description: |
        Specifies the mapping template for the transformer. This template is used to map the parsed EDI file using JSONata or XSLT. This parameter is available for backwards compatibility. Use the Mapping data type instead.
    - name: ediType
      description: |
        Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
      value:
        x12Details:
          transactionSet: "{{ transactionSet }}"
          version: "{{ version }}"
    - name: sampleDocument
      value: "{{ sampleDocument }}"
      description: |
        Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.
    - name: inputConversion
      description: |
        Specify the InputConversion object, which contains the format options for the inbound transformation.
      value:
        fromFormat: "{{ fromFormat }}"
        formatOptions:
          x12:
            transactionSet: "{{ transactionSet }}"
            version: "{{ version }}"
        advancedOptions:
          x12:
            splitOptions:
              splitBy: "{{ splitBy }}"
            validationOptions:
              validationRules:
                - codeListValidationRule:
                    elementId: "{{ elementId }}"
                    codesToAdd: "{{ codesToAdd }}"
                    codesToRemove: "{{ codesToRemove }}"
                  elementLengthValidationRule:
                    elementId: "{{ elementId }}"
                    maxLength_: {{ maxLength_ }}
                    minLength_: {{ minLength_ }}
                  elementRequirementValidationRule:
                    elementPosition: "{{ elementPosition }}"
                    requirement: "{{ requirement }}"
    - name: mapping
      description: |
        Specify the structure that contains the mapping template and its language (either XSLT or JSONATA).
      value:
        templateLanguage: "{{ templateLanguage }}"
        template: "{{ template }}"
    - name: outputConversion
      description: |
        A structure that contains the OutputConversion object, which contains the format options for the outbound transformation.
      value:
        toFormat: "{{ toFormat }}"
        formatOptions:
          x12:
            transactionSet: "{{ transactionSet }}"
            version: "{{ version }}"
        advancedOptions:
          x12:
            splitOptions:
              splitBy: "{{ splitBy }}"
            validationOptions:
              validationRules:
                - codeListValidationRule:
                    elementId: "{{ elementId }}"
                    codesToAdd: "{{ codesToAdd }}"
                    codesToRemove: "{{ codesToRemove }}"
                  elementLengthValidationRule:
                    elementId: "{{ elementId }}"
                    maxLength_: {{ maxLength_ }}
                    minLength_: {{ minLength_ }}
                  elementRequirementValidationRule:
                    elementPosition: "{{ elementPosition }}"
                    requirement: "{{ requirement }}"
    - name: sampleDocuments
      description: |
        Specify a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
      value:
        bucketName: "{{ bucketName }}"
        keys:
          - input: "{{ input }}"
            output: "{{ output }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_transformer"
    values={[
        { label: 'update_transformer', value: 'update_transformer' }
    ]}
>
<TabItem value="update_transformer">

Updates the specified parameters for a transformer. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively, a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.

```sql
UPDATE aws.b2bi.transformers
SET 
transformerId = '{{ transformerId }}',
name = '{{ name }}',
status = '{{ status }}',
fileFormat = '{{ fileFormat }}',
mappingTemplate = '{{ mappingTemplate }}',
ediType = '{{ ediType }}',
sampleDocument = '{{ sampleDocument }}',
inputConversion = '{{ inputConversion }}',
mapping = '{{ mapping }}',
outputConversion = '{{ outputConversion }}',
sampleDocuments = '{{ sampleDocuments }}'
WHERE 
region = '{{ region }}' --required
AND transformerId = '{{ transformerId }}' --required
RETURNING
name,
created_at,
edi_type,
file_format,
input_conversion,
mapping,
mapping_template,
modified_at,
output_conversion,
sample_document,
sample_documents,
status,
transformer_arn,
transformer_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transformer"
    values={[
        { label: 'delete_transformer', value: 'delete_transformer' }
    ]}
>
<TabItem value="delete_transformer">

Deletes the specified transformer. A transformer can take an EDI file as input and transform it into a JSON-or XML-formatted document. Alternatively, a transformer can take a JSON-or XML-formatted document as input and transform it into an EDI file.

```sql
DELETE FROM aws.b2bi.transformers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_transformer_job"
    values={[
        { label: 'start_transformer_job', value: 'start_transformer_job' }
    ]}
>
<TabItem value="start_transformer_job">

Runs a job, using a transformer, to parse input EDI (electronic data interchange) file into the output structures used by Amazon Web Services B2B Data Interchange. If you only want to transform EDI (electronic data interchange) documents, you don't need to create profiles, partnerships or capabilities. Just create and configure a transformer, and then run the StartTransformerJob API to process your files. The system stores transformer jobs for 30 days. During that period, you can run GetTransformerJob and supply its transformerId and transformerJobId to return details of the job.

```sql
EXEC aws.b2bi.transformers.start_transformer_job 
@region='{{ region }}' --required 
@@json=
'{
"inputFile": "{{ inputFile }}", 
"outputLocation": "{{ outputLocation }}", 
"transformerId": "{{ transformerId }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
